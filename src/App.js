import './App.css';
import Search from './search';

function App() {
  return (
    <div className="App">
    <h6>Dictionary App<br /><small id="description">SheCodes React Project</small></h6>
    <Search />
    <h2>Welcome</h2><h5>/ˈwɛlkəm/</h5>
    <h5 id="description"><i>noun</i></h5>
    <h4>An instance or manner of greeting someone.</h4>
    <p><i>"Welcome to my SheCodes Dictionary App!"</i></p>
    <h6 class="footer">Coded by Hayleigh 👩‍💻</h6>
    </div>
  );
}

export default App;
