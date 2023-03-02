import React, { useState, useEffect } from 'react';
import axios from "axios"; 
import 'bootswatch/dist/darkly/bootstrap.min.css';
import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
const [weatherData, setWeatherData] = useState()


useEffect(() => {
  setTimeout(() => {
    fetchWeather()
  }, 5000)
}, []);

const fetchWeather = async () => {
  try {
    let response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=40.7587&lon=-111.8761&appid=527a26fca8f97a52d76385f7266e5b78&units=imperial")
    setWeatherData(response.data)
    console.log("Weather INFO", response.data)
  } catch (error) {
    console.log(error.message)
    
  }
}



  return (
    <div className="App">
      <h1>Weather App ☁️</h1>                  
    {weatherData ?( <WeatherCard weatherData={weatherData} /> ):( <div className='loader'>Loading</div> ) }
    
    </div>
  );
}

export default App;
