import { RightInfoContainer, LeftSearchContainer } from './containers';
import { Header } from './components'
import React from 'react';

function App() {
  const [selectedTheater, setSelectedTheater] = React.useState(null)
  const [selectedMovie, setSelectedMovie] = React.useState(null)
  return (
    <div className="App">
      <div className='head'><Header /></div>
      <div className='mainContainers'>
        <div className="search"><LeftSearchContainer selectedTheater={selectedTheater} setSelectedTheater={setSelectedTheater}
        selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/></div>
        <div className="info"><RightInfoContainer selectedTheater={selectedTheater} selectedMovie={selectedMovie}/></div>
      </div>
    </div>
  );
}

export default App;
