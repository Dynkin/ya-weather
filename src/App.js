import logo from './logo.svg';
import './App.css';

function App() {
  const sendRequest = () => {
    fetch('/api/weather', {
      method: 'GET',
    })
    .then((res) => {
      console.log('success', res);
    })
    .catch((err) => {
      console.log('error', err.message);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={sendRequest}>Send request to Yandex Weather</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
