import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
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
          <div className="mb-20">
            <h1>New York</h1>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-7">
                  <img
                    src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                    alt="Cloudy"
                  />
                  <span className="degree">17°C</span>
                </div>
                <div className="col-5">
                  <ul className="details">
                    <li>Precipitation: 21%</li>
                    <li>Humidity: 92%</li>
                    <li>Wind: 11 km/h</li>
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
                <li>Cloudy</li>
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
}
