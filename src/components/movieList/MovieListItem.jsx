import React from 'react';
import "./movieListItem.css"

const MovieListItem = ({ title, onClick, selected  }) => {

  return (
    <div
      className={`MovieListItem ${selected ? 'active' : ''}`}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export default MovieListItem;
