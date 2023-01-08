import React from 'react'
import "./rightInfoContainer.css"
import Info from '../../components/info/Info'

function RightInfoContainer({ selectedTheater, selectedMovie }) {
  return (
    <div className='infoContainer'>
      <Info selectedTheater={selectedTheater} selectedMovie={selectedMovie}/>
    </div>
  )
}

export default RightInfoContainer