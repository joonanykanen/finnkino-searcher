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
        /* Fetching the Finnkino API Theatre XML Data */
        fetch(url)
        .then((response) => response.text())
        .then((textResponse) => {
            setMovies(textResponse)
        })
        .catch((error) => {
            console.log(error);
        });

        /* Converting xml data into json */
        let movieData = convert.xml2json(movies, { compact: true, spaces: 4 })
        let movieObj = JSON.parse(movieData)
        setMovieObj(movieObj.Schedule.Shows.Show)

        /* Use area, eventID & nrOfDays
        Example url: https://www.finnkino.fi/xml/Schedule/?area=1014&eventID=303897&nrOfDays=7 */
    }

    function editUrl() {
        console.log(url)
        if(selectedTheater !== null && selectedTheater !== undefined) {
            setUrl(`https://www.finnkino.fi/xml/Schedule/?area=${selectedTheater.ID._text}`)
        }
    }

    const filteredMovies = movieObj.filter((movie) =>
        movie.Title._text.toLowerCase().includes(searchText.toLowerCase())
    )

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
                    {filteredMovies.map((movie) => (
                    <MovieListItem
                    title={movie.Title._text}
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