
import React from 'react';
const Forecast = ({ forecast }) => {
  return (
    <div>
      <h2 className="text-center text-primary">Forecast Details</h2>
      {forecast && forecast.list ? (
        forecast.list.map((day, index) => (
          <div key={index}>
            <h5>
              {new Date(day.dt * 1000).toLocaleDateString()} - {day.weather[0].description} - {day.main.temp} °C
            </h5>
          </div>
        ))
      ) : (
        <p>No forecast data available.</p> // Fallback message if no data
      )}
    </div>
  );
};

export default Forecast;