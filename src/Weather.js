import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function displayInfo(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: "https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container ">
          <div className="weather">
            <form>
              <input
                type="search"
                placeholder="Enter city..."
                required
                autoFocus="on"
                className="searchButton"
              />
              <input type="submit" value="search" className="submitButton" />
            </form>

            <h1>{weatherData.city}</h1>

            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-7">
                    <img src={weatherData.icon} alt="Cloudy" />
                    <span className="degree">
                      {Math.round(weatherData.temperature)}°C
                    </span>
                  </div>
                  <div className="col-5">
                    <ul className="details">
                      <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                      <li>Wind: {Math.round(weatherData.wind)}km/h</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="details-1">
                  <li>
                    <strong>Weather</strong>
                  </li>
                  <li>Saturday 21:00</li>
                  <li className="text-capitalize">{weatherData.description}</li>
                </ul>
              </div>
            </div>
          </div>

          <footer>
            This project was coded by{" "}
            <a
              href="https://github.com/passiedaniels"
              target="_blank"
              rel="noreferrer"
            >
              Pascalia A.
            </a>
            , open sourced on{" "}
            <a
              href="https://github.com/passiedaniels/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://myreactweathe.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    let key = "943a3ddbo20b374aff624c0t29d891a1";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${key}`;
    axios.get(apiUrl).then(displayInfo);
    return (
      <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  }
}
