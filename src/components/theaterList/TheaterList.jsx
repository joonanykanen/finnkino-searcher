import React from "react"
import convert from "xml-js"
import TheaterListItem from "./TheaterListItem"
import "./theaterList.css"
import 'font-awesome/css/font-awesome.min.css';

const TheaterList = ({ selectedTheater, setSelectedTheater }) => {
    const [theaters, setTheaters] = React.useState([])
    const [theaterObj, setTheaterObj] = React.useState([])
    const [showTheater, setShowTheaters] = React.useState(false)
    const url = "https://www.finnkino.fi/xml/TheatreAreas/"

    const getTheaterData = async () => {
        try {
          // Fetch the Finnkino API Theatre XML Data
          const response = await fetch(url);
          // Get the text response from the API
          const textResponse = await response.text();
          // Set the theaters state with the text response
          setTheaters(textResponse);
      
          // Convert the xml data into json
          const theaterData = convert.xml2json(theaters, { compact: true, spaces: 4 });
          const theaterObj = JSON.parse(theaterData);
          // Set the theaterObj state with the parsed json data
          setTheaterObj(theaterObj.TheatreAreas.TheatreArea);
          console.log(theaterObj.TheatreAreas.TheatreArea);
          // Toggle the showTheater state
          setShowTheaters(!showTheater);
        } catch (error) {
          console.log(error);
        }
      };
      

    React.useEffect(() => {
        getTheaterData()
    }, [])
    
    const onClickHandler = (theater) => {
        setSelectedTheater(
            selectedTheater === null || theater.ID !== selectedTheater.ID ? theater : null
        )
        setShowTheaters(!showTheater)
      }

    
    // When the list is opened
    if(showTheater) {
        return(
            <div>
            <button onClick={getTheaterData} className="theaterButton">{selectedTheater !== null ? selectedTheater.Name._text : "Choose a Movie Theater"}<i className="fa fa-caret-down"></i></button>
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

    // When the list is closed
    return(
        <div>
            <button onClick={getTheaterData} className="theaterButton">{selectedTheater !== null ? selectedTheater.Name._text : "Choose a Movie Theater"}<i className="fa fa-caret-down"></i></button>
        </div>
    )
}

export default TheaterList