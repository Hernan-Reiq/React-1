import './assets/css/App.css';
import MiComponent from './components/MiComponent';
import ProbandoEstados from './components/probando_estados';
import PropsBasicas from './components/PropsBasicas';
import MasState from './components/MasState';
import Router from './Router';

function App() {
  var textP = "Es una forma interesante de enviar parámetros o variables a los componentes, aunque OJO, se puede hacer MUCHO MÁS! solo falta dedicarle el tiempo suficiente."
  return (
    <div className="App">
      <header>
      <Router />
        <div className="division"></div>
        <MasState />
        <div className="division"></div>
        <PropsBasicas
          title="Estoy probando las props de React y es genial!"
          text={textP}
        />
        <div className="division"></div>
        <ProbandoEstados />
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
