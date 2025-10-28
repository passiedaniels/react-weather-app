import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("Celsius");

  function changeToFahreinheit(event) {
    event.preventDefault();
    setUnit("Fahreinheit");
  }
  function changeToCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  if (unit === "Celsius") {
    return (
      <span>
        <span className="degree">{Math.round(props.celsius)}</span>

        <span className="degree-2">
          °C |{" "}
          <a href="/" onClick={changeToFahreinheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahreinheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="degree">{Math.round(fahreinheit)}</span>
        <span className="degree-2">
          <a href="/" onClick={changeToCelsius}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
