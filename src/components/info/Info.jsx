import React from "react";
import ShowtimeList from './ShowtimeList'
import EventTitle from './EventTitle'
import "./info.css"

const Info = ({ selectedTheater, selectedMovie }) => {

    if(selectedMovie !== null) {
        let len_min = selectedMovie.LengthInMinutes._text
        const hours = Math.floor(len_min / 60)
        const minutes = len_min % 60 // Mins left of full hours

        return(
            <div className="infoComponent">
                <div className="titleBox">
                    <EventTitle movie={selectedMovie} className="title"/>
                </div>
                <div className="length">
                    Length: {hours} h {minutes} min
                </div>
                <div className="genres">
                    Genres: {selectedMovie.Genres._text}
                </div>
                <div className="picntime">
                    <div className="showtimeList">
                            <ShowtimeList selectedTheater={selectedTheater} selectedMovie={selectedMovie}/>
                        </div>
                    <div className="description">
                        
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