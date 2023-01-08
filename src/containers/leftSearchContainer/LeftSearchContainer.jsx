import React from 'react'
import "./leftSearchContainer.css"
import TheaterList from "../../components/theaterList/TheaterList"
import MovieList from '../../components/movieList/MovieList'

function LeftSearchContainer({ selectedTheater, setSelectedTheater,selectedMovie, setSelectedMovie }) {
  return (
    <div className='searchContainer'>
        <TheaterList selectedTheater={selectedTheater} setSelectedTheater={setSelectedTheater} />
        <MovieList selectedTheater={selectedTheater} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>
    </div>
  )
}

export default LeftSearchContainer