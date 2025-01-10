import React from "react";
import "./CSS/Weather.css";

export default function WeatherData(props) {
  return (
    <div className="weather-grid">
      <div className="weather-grid-column">
        <h2>{props.data.city}</h2>
        <h6>{props.data.country}</h6>
      </div>
      <div className="weather-grid-column-2">
        <span>{Math.round(props.data.temperature)}°C</span>
      </div>
    </div>
  );
}
