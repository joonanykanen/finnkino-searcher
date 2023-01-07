import React from 'react'
import "./theaterListItem.css"

const TheaterListItem = ({ title, onClick, selected }) => {
  return (
    <div
      className={`TheaterListItem ${selected ? 'active' : ''}`}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export default TheaterListItem
