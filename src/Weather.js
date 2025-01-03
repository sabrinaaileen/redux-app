import React, { useState } from "react";
import axios from "axios";

import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [info, setInfo] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  const getGeolocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      getCurrentWeather(longitude, latitude);
    });
  };

  function getCurrentWeather(lon, lat) {
    const apiKey = "02060cacd430ctof7d20b656741fc18d";
    let url = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    setInfo({
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      coordinates: response.data.coordinates,
    });
    setReady(true);
  }
  function search() {
    const apiKey = "02060cacd430ctof7d20b656741fc18d";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div>
        <h2>What to expect from the heaven</h2>
        <form onSubmit={handleSubmit}>
          <div className="weatherGrid">
            <div className="weatherGridColumn">
              <WeatherData data={info} />
            </div>
            <div className="weatherGridColumn">
              <input
                type="button"
                value="See if it rains outside your house"
                className="buttonCurrent"
                title="Get the weather for your current location!"
                onClick={getGeolocation}
              />
              <input
                type="submit"
                value="Or whatever..."
                className="buttonSearch"
                title="Get the weather for whatever..."
              />
              <input
                type="text"
                placeholder="You know what you are searching for.."
                className="searchField"
                onChange={changeCity}
              />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
