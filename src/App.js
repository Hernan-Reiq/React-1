import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import MiComponent from './components/MiComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header p-4">
        <MiComponent />
        <h2>My great app with React</h2>
        <img src={logo} className="App-logo" alt="logo" />
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
