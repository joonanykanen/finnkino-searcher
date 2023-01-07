import React from 'react'
import "./leftSearchContainer.css"
import TheaterList from "../../components/theaterList/TheaterList"
import Search from "../../components/search/Search"

function LeftSearchContainer() {
  return (
    <div className='searchContainer'>
        <h4>LeftSearchContainer</h4>
        <TheaterList />
        <Search />
    </div>
  )
}

export default LeftSearchContainer