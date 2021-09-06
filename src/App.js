import './assets/css/App.css';
import MiComponent from './components/MiComponent';
import ProbandoEstados from './components/probando_estados';
import Logos from './components/logos';
import PropsBasicas from './components/PropsBasicas';

function App() {
  var text = "Es una forma interesante de enviar parámetros o variables a los componentes, aunque OJO, se puede hacer MUCHO MÁS! solo falta dedicarle el tiempo suficiente."
  return (
    <div className="App">
      <header className="App-header p-4">
        <PropsBasicas
          title="Estoy probando las props de React y es genial!"
          text={text}
        />
        <div className="division"></div>
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
