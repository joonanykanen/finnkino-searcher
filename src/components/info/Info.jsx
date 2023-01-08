import React from "react";
import "./info.css"
import ShowtimeList from './ShowtimeList'
import EventTitle from './EventTitle'


const Info = ({ selectedTheater, selectedMovie }) => {

    if(selectedMovie !== null) {
        return(
            <div className="infoComponent">
                <div className="titleBox">
                    <EventTitle title={selectedMovie.Title._text}/>
                </div>

                <div className="infoBox">
                {selectedMovie.LengthInMinutes._text}
                </div>
                <img 
                    src={selectedMovie.Images.EventSmallImagePortrait._text
                    }
                    alt="new"
                    />
                <div className="showtimeList">
                    <ShowtimeList selectedTheater={selectedTheater} selectedMovie={selectedMovie}/>
                </div>
            </div>
        )
    }
}

export default Info;