import React, { useState, useEffect } from "react";
import axios from "axios";

export const Weather = ({ country }) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`
      )
      .then(response => {
        setWeather(response.data.current);
      });
  }, [country]);

  return (
    <>
      <h2>
        Weather in {country.capital} is {weather.weather_descriptions}
      </h2>
      <h5>Temperature: {weather.temperature}°C</h5>
      <h5>Humidity: {weather.humidity}%</h5>
      <img src={weather.weather_icons} alt="Weather icon" width="64"></img>
    </>
  );
};
