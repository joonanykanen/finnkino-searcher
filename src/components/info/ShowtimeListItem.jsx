import React from 'react'
import "./showtimeListItem.css"

const ShowtimeListItem = ({ showtime }) => {
  const d = new Date(showtime)
  return (
    <div className="showtimeListItem">
      {d.toLocaleDateString()} {d.toLocaleTimeString()}
      
    </div>
  )
}

export default ShowtimeListItem