import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <Weather defaultCity="Tokyo" />
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
  );
}
