
import React, { useState } from "react";

const WeatherForm = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-inline justify-content-center mb-4"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="form-control mr-2"
        placeholder="Enter city"
        required
      />
      <button type="submit" className="btn btn-primary">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;