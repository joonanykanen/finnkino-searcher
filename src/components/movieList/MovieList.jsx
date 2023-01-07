import React from "react";
import convert from "xml-js"
import MovieListItem from "./MovieListItem";
import "./movieList.css"

const MovieList = () => {
    const [movies, setMovies] = React.useState('')
    const [movieObj, setMovieObj] = React.useState([])
    const [movie, setMovie] = React.useState('');
    const [uniqueObjects, setUniqueObjects] = React.useState([])
    const arrayObjects = []
    const url = "https://www.finnkino.fi/xml/Schedule/?area=1014&dt=09.01.2023"
    
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
        let Object = JSON.parse(movieData)
        setMovieObj(Object.Schedule.Shows.Show)

        let array = [movieObj[0].EventID._text]
        for (let i = 0; i < movieObj.length; i++){
            if (!array.includes(movieObj[i].EventID._text)) {
                array.push(movieObj[i].EventID._text)
                setMovie(movieObj[i])
                arrayObjects.push(movieObj[i])
            }
        }
        console.log(arrayObjects)
    }

    React.useEffect(() => {
        getMovieData()
    }, [])

    return(
        <div className="MovieList">
            {arrayObjects.map((movie) => (
            <MovieListItem
            key = {movie.EventID._text}
            title={movie.EventID._text}
            />
        ))}
        Hello from MovieList
        </div>
    )
}

export default MovieList