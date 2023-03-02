import React from "react";

const WeatherCard = ({weatherData}) => {
  
    return (
    <>
    <div className="card mb-3" style={{"width": "500px"}}>
  <h3 className="card-header">{weatherData.name}</h3>
  <div className="card-body">
    <h5 className="card-title">{weatherData.weather[0].main}</h5>
    <h6 className="card-subtitle text-muted">{weatherData.weather[0].description}</h6>
  </div>
  <ul className="list-group list-group-flush" >
    <li className="list-group-item">TEMP: {weatherData.main.temp}</li>
    <li className="list-group-item">FEELS LIKE: {weatherData.main.feels_like}*F</li>
    <li className="list-group-item">TEMP LOWS: {weatherData.main.temp_min}*F</li>
    <li className="list-group-item">TEMP HIGHS: {weatherData.main.temp_max}*F</li>

  </ul>
  <div className="card-footer text-muted">
    1 second ago
  </div>
</div>

    </>
  );
};

export default WeatherCard;
