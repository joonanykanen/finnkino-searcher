import { RightInfoContainer, LeftSearchContainer } from './containers';
import { Header } from './components'

function App() {
  return (
    <div className="App">
      <div className='head'><Header /></div>
      <div className='mainContainers'>
        <div className="search"><LeftSearchContainer /></div>
        <div className="info"><RightInfoContainer /></div>
      </div>
    </div>
  );
}

export default App;
