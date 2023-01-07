import React from 'react';
import "./movieListItem.css"

const MovieListItem = ({ title }) => {

  return (
    <div
      className={`MovieListItem ${title}`}
    >
      {title}
    </div>
  )
}

export default MovieListItem;
