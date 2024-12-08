const WeatherDisplay = ({ weather }) => {
  return (
    <div className="card text-center mt-4 text-warning">
      <div className="card-header">
        <h2>{weather.name}</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">Temperature: {weather.main.temp} °C</h5>
        <p className="card-text">Weather: {weather.weather[0].description}</p>
      </div>
      <div className="card-footer">Humidity: {weather.main.humidity}%</div>
    </div>
  );
};

export default WeatherDisplay;
