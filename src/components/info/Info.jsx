import React from "react";
import ShowtimeList from './ShowtimeList'
import EventTitle from './EventTitle'
import "./info.css"

const Info = ({ selectedTheater, selectedMovie }) => {

    if(selectedMovie !== null) {
        return(
            <div className="infoComponent">
                <div className="titleBox">
                    <EventTitle movie={selectedMovie} className="title"/>
                </div>
                <div className="length">
                    Length: {selectedMovie.LengthInMinutes._text} min
                </div>
                <div className="picntime">
                    <div className="showtimeList">
                            <ShowtimeList selectedTheater={selectedTheater} selectedMovie={selectedMovie}/>
                        </div>
                    <img 
                        src={selectedMovie.Images.EventMediumImagePortrait._text
                        }
                        alt="new" className="coverImg"
                        />
                </div>
            </div>
        )
    }
}

export default Info;