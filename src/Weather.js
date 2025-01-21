import React, { useState } from "react";
import axios from "axios";

import WeatherData from "./WeatherData";

import "./CSS/Weather.css";

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
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
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
      <div className="Weather">
        <h2 className="weather-header">What to expect from above</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <WeatherData data={info} />
            </div>
            <div>
              <input
                type="button"
                value="Your location"
                className="button-current"
                title="Get the weather for your current location!"
                onClick={getGeolocation}
              />
              <input
                type="submit"
                value="Search another city"
                className="button-search"
                title="Get the weather for whatever..."
              />
              <input
                type="text"
                placeholder="Type in city..."
                className="search-field"
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
