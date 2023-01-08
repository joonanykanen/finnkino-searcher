import React from "react"
import convert from "xml-js"
/*  import Dropdown from 'react-bootstrap/Dropdown';    Consider getting rid of this dependency  */
import TheaterListItem from "./TheaterListItem"
import "./theaterList.css"

const TheaterList = ({ selectedTheater, setSelectedTheater }) => {
    const [theaters, setTheaters] = React.useState([])
    const [theaterObj, setTheaterObj] = React.useState([])
    const [showTheater, setShowTheaters] = React.useState(false)
    const url = "https://www.finnkino.fi/xml/TheatreAreas/"

    const getTheaterData = async () => {
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
        getTheaterData()
    }, [])
    
    const onClickHandler = (theater) => {
        setSelectedTheater(
            selectedTheater === null || theater.ID !== selectedTheater.ID ? theater : null
        )
        setShowTheaters(!showTheater)
      }

    if(showTheater) {
        return(
            <div>
            <button onClick={getTheaterData} className="theaterButton">Choose a Movie Theater</button>
                <div className="TheaterList shadow-drop-2-center">
                    {theaterObj.map((theater) => (
                    <TheaterListItem
                    key={theater.ID._text}
                    title={theater.Name._text}
                    selected={selectedTheater?.ID === theater.ID}
                    onClick={() => onClickHandler(theater)}
                    />
                ))}
                </div>
            </div>

        )
    }

    return(
        <div>
            <button onClick={getTheaterData} className="theaterButton">Choose a Movie Theater</button>
        </div>
    )
}

export default TheaterList