import React from "react";
import convert from "xml-js"
import MovieListItem from "./MovieListItem";
import "./movieList.css"

const MovieList = ({selectedTheater, selectedMovie, setSelectedMovie}) => {
    const [movies, setMovies] = React.useState([])
    const [movieObj, setMovieObj] = React.useState([])
    const [searchText, setSearchText] = React.useState('')
    const [url, setUrl] = React.useState('https://www.finnkino.fi/xml/Schedule/')

    const getMovieData = async () => {
        try {
          // Fetch the Finnkino API Theatre XML Data
          const response = await fetch(url);
          // Get the text response from the API
          const textResponse = await response.text();
          // Set the movies state with the text response
          setMovies(textResponse);
      
          // Convert the xml data into json
          const movieData = convert.xml2json(movies, { compact: true, spaces: 4 });
          const movieObj = JSON.parse(movieData);
          // Set the movieObj state with the parsed json data
          setMovieObj(movieObj.Schedule.Shows.Show);
      
          /* Use area, eventID & nrOfDays
          Example url: https://www.finnkino.fi/xml/Schedule/?area=1014&eventID=303897&nrOfDays=7 */
        } catch (error) {
          console.log(error);
        }
      };
      

    function editUrl() {
        console.log(url)
        if(selectedTheater !== null && selectedTheater !== undefined) {
            setUrl(`https://www.finnkino.fi/xml/Schedule/?area=${selectedTheater.ID._text}`)
        }
    }

    const uniqueTitles = new Set();
    const filteredMovies = movieObj
      .filter((movie) => {
        if (uniqueTitles.has(movie.Title._text)) {
          return false;
        }
        uniqueTitles.add(movie.Title._text);
        return movie.Title._text.toLowerCase().includes(searchText.toLowerCase());
      })
      .map((movie) => ({ ...movie }));
  
  

    React.useEffect(() => {
        editUrl()
    }, [selectedTheater])

    React.useEffect(() => {
        getMovieData()
    }, [url])

    const onClickHandler = (movie) => {
        setSelectedMovie(
            selectedMovie === null || movie !== selectedMovie ? movie : null
        )
    }
    
    if(selectedTheater !== null && filteredMovies !== 0) {
        return(
            <div>
                <div className="searchBox">
                    <input
                    placeholder="Type a name of a movie" className="searchField"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    />
                </div>
                <div className="MovieList">
                    {console.log(filteredMovies)}
                    {filteredMovies.map((movie) => (
                    <MovieListItem
                    title={movie.Title._text}
                    key={movie.EventID._text}
                    selected={selectedMovie?.ID === movie.ID}
                    onClick={() => onClickHandler(movie)}
                    />
                ))}
            </div>
        </div>
        )
    }
    return(
        <div>
            <div className="searchBox">
                <input
                placeholder="Type a name of a movie" className="searchField"
                />
            </div>
        </div>
    )
}

export default MovieList