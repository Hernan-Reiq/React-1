import './assets/css/App.css';
import MiComponent from './components/MiComponent';
import Logos from './components/logos';

function App() {
  return (
    <div className="App">
      <header className="App-header p-4">
        <Logos />
        <MiComponent />
        <a 
          className="App-link"
          href="https://bit.ly/hernanreiq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my portfolio of projects and skills
        </a>
      </header>
    </div>
  );
}

export default App;
