import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.info.city}</h1>
      <ul className="details-1">
        <h2>
          {" "}
          <strong>Weather</strong>
        </h2>

        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.info.icon} alt="Cloudy" />
          <span>
            <WeatherTemperature celsius={props.info.temperature} />
          </span>
        </div>

        <div className="col-6">
          <ul className="details">
            <li>Humidity: {Math.round(props.info.humidity)}%</li>
            <li>Wind: {Math.round(props.info.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
