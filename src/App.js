import './App.css';
import './components/Header';
import Header from './components/Header';
import SearchComponent from './components/SearchComponent';
import InfoComponent from './components/InfoComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainComponents'>
        <SearchComponent />
        <InfoComponent />
      </div>
    </div>
  );
}

export default App;
