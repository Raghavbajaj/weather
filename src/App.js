import React, { useState } from "react";

import "./App.css";

const api = {
  key: "8814a34486850b05a6fc1dafa89c8b3a",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [city, setcity] = useState("");
  const [weath, setweather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setweather(result);
          setcity("");
          console.log(result);
        });
    }
  };

  return (
    <div className="app">
      <main>
        <input
          type="text"
          placeholder="City Name..."
          value={city}
          onChange={(e) => setcity(e.target.value)}
          className="place"
          onKeyPress={search}
        ></input>

        <div className="location-box">
          <div className="location">
            {weath.name},{weath.sys.country}
          </div>
          {/* <div className="date-time">Saturday 11 January 2021</div> */}
        </div>

        <div className="weather-box">
          <div className="temp"> {weath.main.temp}॰C </div>
          <div className="weather">{weath.weather[0].description}</div>
        </div>
      </main>
    </div>
  );
}

export default App;

// 4bd34a0c791dbd6dc7181987589830b9

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
