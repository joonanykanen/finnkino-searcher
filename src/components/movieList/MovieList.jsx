import React from "react";
import convert from "xml-js"
import MovieListItem from "./MovieListItem";
import "./movieList.css"

const MovieList = ({selectedTheater}) => {
    const [movies, setMovies] = React.useState([])
    const [movieObj, setMovieObj] = React.useState([])
    const [movie, setMovie] = React.useState('');
    const [uniqueObjects, setUniqueObjects] = React.useState([])
    const [searchText, setSearchText] = React.useState('')
    const [url, setUrl] = React.useState('')
    const arrayObjects = []

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

    React.useEffect(() => {
        editUrl()
    }, [selectedTheater])

    React.useEffect(() => {
        getMovieData()
    }, [url])

    if(selectedTheater !== null) {
        return(
            <div>
                <div className="searchBox">
                    <input
                    placeholder="Type a name of a movie" className="searchField"
                    />
                </div>
                <div className="MovieList">
                    {movieObj.map((movie) => (
                    <MovieListItem
                    title={movie.Title._text}
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
                placeholder="Type a name of a movie"
                />
            </div>
        </div>
    )
}

export default MovieList