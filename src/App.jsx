import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDisplay from './assets/components/WeatherDisplay';
import ForecastDisplay from './assets/components/ForecastDisplay';
import WeatherForm from './assets/components/WeatherForm';


function App() {
  const apiKey = import.meta.env.API_KEY; 

  //  https://api.openweathermap.org/data/2.5/weather?q=USA&appid=apiKey
   return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App
