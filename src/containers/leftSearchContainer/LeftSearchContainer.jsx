import React from 'react'
import "./leftSearchContainer.css"
import TheaterList from "../../components/theaterList/TheaterList"
import Search from "../../components/search/Search"
import MovieList from '../../components/movieList/MovieList'

function LeftSearchContainer() {
  return (
    <div className='searchContainer'>
        <h4>LeftSearchContainer</h4>
        <TheaterList />
        <Search />
        <MovieList />
    </div>
  )
}

export default LeftSearchContainer