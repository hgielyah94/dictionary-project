import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
    <h6>Dictionary App<br /><small id="description">SheCodes React Project</small></h6>
    <Dictionary />
    <h6 className="footer"><small>Coded by </small><a href="/">Hayleigh</a> 👩‍💻</h6>
    <h6><a href="https://github.com/hgielyah94/dictionary-project" target="_blank" rel="noreferrer">View on GitHub</a></h6>
    </div>
  );
}

export default App;
