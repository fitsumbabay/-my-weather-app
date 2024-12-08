import { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDisplay from './assets/components/WeatherDisplay';
import ForecastDisplay from './assets/components/ForecastDisplay';
import WeatherForm from './assets/components/WeatherForm';
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const loadingRef = useRef(false);
  const [city, setCity] = useState("New York");

  useEffect(() => {
    fetchWeather(city);
  }, [city]); // Fetch weather data when the city state changes

  const fetchWeather = async (city) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    loadingRef.current = true; // Set loading to true before fetching data
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeather(weatherResponse.data);
      setError(null);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      setForecast(forecastResponse.data);
    } catch (err) {
      setWeather(null);
      setForecast(null);
      setError(
        "Could not fetch the weather data. Please check the city name and try again."
      );
    } finally {
      loadingRef.current = false;
    }
  };

  return (
    <div className="container mt-4">
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

export default App;
