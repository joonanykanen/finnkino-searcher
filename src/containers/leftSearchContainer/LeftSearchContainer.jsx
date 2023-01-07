import React from 'react'
import "./leftSearchContainer.css"
import TheaterList from "../../components/theaterList/TheaterList"
import MovieList from '../../components/movieList/MovieList'

function LeftSearchContainer() {
  const [selectedTheater, setSelectedTheater] = React.useState(null)
  return (
    <div className='searchContainer'>
        <h4>LeftSearchContainer</h4>
        <TheaterList selectedTheater={selectedTheater} setSelectedTheater={setSelectedTheater} />
        {console.log(selectedTheater)}
        <MovieList selectedTheater={selectedTheater} />
    </div>
  )
}

export default LeftSearchContainer