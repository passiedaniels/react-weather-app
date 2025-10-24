import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Weather />
    </div>
  );
}

export default function Weather() {
  return (
    <div>
      <h1>Weather App</h1>

      <p>
        This project was coded by{" "}
        <a href="https://github.com/passiedaniels" target="_blank">
          Pascalia A.
        </a>
        , open sourced on{" "}
        <a
          href="https://github.com/passiedaniels/react-weather-app"
          target="_blank"
        >
          github
        </a>{" "}
        and hosted on{" "}
        <a href="https://myreactweathe.netlify.app/" target="_blank">
          Netlify
        </a>
      </p>
    </div>
  );
}
