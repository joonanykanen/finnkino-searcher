import React from "react";
import convert from "xml-js"
import "./showtimeList.css"
import ShowtimeListItem from "./ShowtimeListItem";

const ShowtimeList = ({selectedTheater, selectedMovie}) => {
    const [showtime, setShowtime] = React.useState('')
    const [showtimeObj, setShowtimeObj] = React.useState([])
    const [url, setUrl] = React.useState('')

    const getShowtimes = async () => {
        /* Fetching the Finnkino API Theatre XML Data */
        await fetch(url)
        .then((response) => response.text())
        .then((textResponse) => {
            setShowtime(textResponse)
        })
        .catch((error) => {
            console.log(error);
        });

        /* Converting xml data into json */
        let movieData = convert.xml2json(showtime, { compact: true, spaces: 4 })
        let showtimeObj = JSON.parse(movieData)
        setShowtimeObj(showtimeObj.Schedule.Shows.Show)
        console.log(showtimeObj.Schedule.Shows.Show, 'kek')
        console.log(url)
    }

    function editUrl() {
        if(selectedTheater !== null && selectedTheater !== undefined) {
            setUrl(`https://www.finnkino.fi/xml/Schedule/?area=${selectedTheater.ID._text}
            &eventID=${selectedMovie.EventID._text}&nrOfDays=5`)
        }
    }

    React.useEffect(() => {
        editUrl()
    }, [selectedMovie])

    React.useEffect(() => {
        getShowtimes()
    }, [url])

    if(selectedMovie !== null && showtimeObj !== 0 && showtimeObj !== undefined) {
        return(
            <div>
                <button onClick={getShowtimes}>
                    Showtimes
                </button>
                <div className="showtimeList">
                    {console.log(showtimeObj)}
                    {showtimeObj.map((movie) => (
                    <ShowtimeListItem
                    showtime={movie.dttmShowStart._text}
                    />
                ))}
                    
                </div>
                {selectedMovie.Title._text}
            </div>
        )
    }
}

export default ShowtimeList