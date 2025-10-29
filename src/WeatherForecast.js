import React from "react";
import "./App.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }

  let apiKey = "943a3ddbo20b374aff624c0t29d891a1";
  let longitude = props.forecast.coordinates.longitude;
  let latitude = props.forecast.coordinates.latitude;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&metrics`;
  axios.get(apiUrl).then(displayForecast);

  return (
    <div className="weatherForecast-Data">
      <div className="row">
        <div className="weatherForecast-Day">Thur</div>
        <div className="weatherForecast-icon">
          <img src={props.forecast.icon} alt={props.forecast.description} />
        </div>
        <div className="weatherForecast-Temperatures">
          <span className="weatherForecast-Temperature-max">20°</span>
          <span className="weatherForecast-Temperature-min">14°</span>
        </div>
      </div>
    </div>
  );
}
