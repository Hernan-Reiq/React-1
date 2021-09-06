import './assets/css/App.css';
import MiComponent from './components/MiComponent';
import ProbandoEstados from './components/probando_estados';
import Logos from './components/logos';

function App() {
  return (
    <div className="App">
      <header className="App-header p-4">
        <ProbandoEstados />
        <div className="division"></div>
        <Logos />
        <div className="division"></div>
        <MiComponent />
        <div className="division"></div>
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
