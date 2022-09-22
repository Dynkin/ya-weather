import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const sendRequest = () => {
    fetch('/api/weather', {
      method: 'GET',
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setWeather(data);
    })
    .catch((err) => {
      console.log('error', err.message);
      setWeather(null);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button className="ya-button" onClick={sendRequest}>Send request to Yandex Weather</button>
        </p>
        {
          weather && <div>
            <div className="info"><strong>Locality:</strong> {weather.geo_object.country.name}, {weather.geo_object.locality.name}, {weather.geo_object.district.name}</div>
            <div className="info"><strong>Weather:</strong> {weather.fact.temp}&#8451; (feels like {weather.fact.feels_like}&#8451;)</div>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
