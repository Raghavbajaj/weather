import React, { useState } from "react";

function Weather() {
  const [city, setcity] = useState("");

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="app">
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="City Name..."
            value={city}
            onChange={(e) => setcity(e.target.value)}
            className="place"
          ></input>
          <button className="btn">Submit</button>
        </form>
        <div className="location-box">
          <div className="location">Jamtara, JH</div>
          <div className="date-time">Saturday 11 January 2021</div>
        </div>

        <div className="weather-box">
          <div className="temp"> 15॰C </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default Weather;
