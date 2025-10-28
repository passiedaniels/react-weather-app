import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    let key = "943a3ddbo20b374aff624c0t29d891a1";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
    axios.get(apiUrl).then(displayInfo);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container ">
          <div className="weather">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter city..."
                required
                autoFocus="on"
                className="searchButton"
                onChange={handleCity}
              />
              <input type="submit" value="search" className="submitButton" />
            </form>
            <WeatherInfo info={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
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
