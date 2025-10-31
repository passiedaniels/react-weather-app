import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weatherForecast-Day">{day()}</div>
      <div className="weatherForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="weatherForecast-Temperatures">
        <span className="weatherForecast-Temperature-max">
          {maxTemperature()}
        </span>
        <span className="weatherForecast-Temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
