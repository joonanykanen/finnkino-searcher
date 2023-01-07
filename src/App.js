import { RightInfoContainer, LeftSearchContainer } from './containers';
import { Header } from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainComponents'>
        <LeftSearchContainer />
        <RightInfoContainer />
      </div>
    </div>
  );
}

export default App;
