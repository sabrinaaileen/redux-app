import React from "react";

export default function WeatherData(props) {
  return (
    <div>
      <h2>{props.data.city}</h2>
      <h6>{props.data.country}</h6>
      <span>{Math.round(props.data.temperature)}</span>
    </div>
  );
}
