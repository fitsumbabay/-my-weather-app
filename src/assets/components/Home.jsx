
import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";
import ForecastDisplay from "./ForecastDisplay";

const Home = ({ fetchWeather, weather, forecast, loadingRef, error }) => {
  return (
    <div>
      <h1 className="text-center text-primary">Weather Application</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {loadingRef.current && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      {weather && <WeatherDisplay weather={weather} />}
      {forecast && <ForecastDisplay forecast={forecast} />}
    </div>
  );
};

export default Home;
