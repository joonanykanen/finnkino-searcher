import React from "react"
import convert from "xml-js"
import TheaterListItem from "./TheaterListItem"


const TheaterList = () => {
    const [theaters, setTheaters] = React.useState('')
    const [theaterObj, setTheaterObj] = React.useState([])
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
    }

    React.useEffect(() => {
        getMovieData()
    }, [])

    if(theaterObj !== []) {
        return(
            <div className="TheaterList">
                {theaterObj.map((theater) => (
                <TheaterListItem
                key={theater.ID._text}
                title={theater.Name._text}
                />
            ))}
            </div>
        )
    }
}

export default TheaterList