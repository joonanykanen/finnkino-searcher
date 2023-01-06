import React from 'react'

const TheaterListItem = ({ title }) => {
  return (
    <div
      className={`TheaterListItem ${title}`}
    >
      {title}
    </div>
  )
}

export default TheaterListItem
