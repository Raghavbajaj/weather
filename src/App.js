import React, { useState } from "react";

import "./App.css";

const api = {
  key: "8814a34486850b05a6fc1dafa89c8b3a",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [city, setcity] = useState("Jamtara");
  const [weath, setweather] = useState({
    coord: {
      lon: 86.8,
      lat: 23.95,
    },
    weather: [
      {
        id: 721,
        main: "Haze",
        description: "haze",
        icon: "50d",
      },
    ],
    base: "stations",
    main: {
      temp: 25,
      feels_like: 23.33,
      temp_min: 25,
      temp_max: 25,
      pressure: 1017,
      humidity: 50,
    },
    visibility: 4000,
    wind: {
      speed: 4.12,
      deg: 20,
    },
    clouds: {
      all: 0,
    },
    dt: 1612587920,
    sys: {
      type: 1,
      id: 9144,
      country: "IN",
      sunrise: 1612572698,
      sunset: 1612612928,
    },
    timezone: 19800,
    id: 1269298,
    name: "Jāmtāra",
    cod: 200,
  });
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.cod != "404") {
            setweather(result);
          }
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
