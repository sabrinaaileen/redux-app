import React, { useState, useEffect } from "react";
import "./CSS/CurrentDate.css";

export default function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervallId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervallId);
  }, []);

  //let date = new Date();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let currentDay = date.getDate();
  if (currentDay === 1) {
    currentDay = `${currentDay}st`;
  } else if (currentDay === 2) {
    currentDay = `${currentDay}nd`;
  } else if (currentDay === 3) {
    currentDay = `${currentDay}rd`;
  } else if (currentDay === 21) {
    currentDay = `${currentDay}st`;
  } else if (currentDay === 22) {
    currentDay = `${currentDay}nd`;
  } else if (currentDay === 23) {
    currentDay = `${currentDay}rd`;
  } else if (currentDay === 31) {
    currentDay = `${currentDay}st`;
  } else {
    currentDay = `${currentDay}th`;
  }
  let year = date.getFullYear();
  let actualDate = `Welcome! It's ${day}, ${month} ${currentDay}, ${year}.`;
  let actualTime = `The current time is ${hours}:${minutes}:${seconds}`;

  return (
    <div>
      <p className="current-date">
        {actualDate} {actualTime}
      </p>
    </div>
  );
}
