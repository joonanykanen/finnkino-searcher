import React from "react"
import convert from "xml-js"

import Dropdown from 'react-bootstrap/Dropdown';
import TheaterListItem from "./TheaterListItem"

const TheaterList = () => {
    const [theaters, setTheaters] = React.useState('')
    const [theaterObj, setTheaterObj] = React.useState([])
    const [showTheater, setShowTheaters] = React.useState(false)
    const url = "https://www.finnkino.fi/xml/TheatreAreas/"

    const getMovieData = async () => {
        /* Fetching the Finnkino API Theatre XML Data */
        fetch(url)
        .then((response) => response.text())
        .then((textResponse) => {
            setTheaters(textResponse)
        })
        .catch((error) => {
            console.log(error);
        });

        /* Converting xml data into json */
        let theaterData = convert.xml2json(theaters, { compact: true, spaces: 4 })
        let theaterObj = JSON.parse(theaterData)
        setTheaterObj(theaterObj.TheatreAreas.TheatreArea)
        console.log(theaterObj.TheatreAreas.TheatreArea)
        setShowTheaters(!showTheater)
    }

    React.useEffect(() => {
        getMovieData()
    }, [])
    
    if(showTheater) {
        return(
            <div>
            <button onClick={getMovieData}>Choose a Movie Theater</button>
                <div className="TheaterList">
                    {theaterObj.map((theater) => (
                    <TheaterListItem
                    key={theater.ID._text}
                    title={theater.Name._text}
                    />
                ))}
                </div>
            </div>

        )
        }

    return(
        <div>
            <button onClick={getMovieData}>Choose a Movie Theater</button>
        </div>
    )
}

export default TheaterList