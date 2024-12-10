import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/Header";
import Home from "./assets/components/Home";
import Forecast from "./assets/components/Forecast"; 
import About from "./assets/components/About"; 
import axios from "axios";


const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const loadingRef = useRef(false);
  const [city, setCity] = useState("New York");

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (city) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    loadingRef.current = true;
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
    <div className="bg-danger-subtle">
      <Router>
        <div className="container mt-4">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  fetchWeather={fetchWeather}
                  weather={weather}
                  forecast={forecast}
                  loadingRef={loadingRef}
                  error={error}
                />
              }
            />
            <Route
              path="/forecast"
              element={<Forecast forecast={forecast} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;