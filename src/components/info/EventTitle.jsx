import React from 'react'
import "./eventTitle.css"

const EventTitle = ({ movie }) => {
  return (
    <div className='title'>
      {movie.Title._text}
        <a href={`https://www.finnkino.fi/event/${movie.EventID._text}`} className="infotext">Buy Tickets</a>
    </div>
  )
}

export default EventTitle