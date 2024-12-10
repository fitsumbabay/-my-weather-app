const Forecast = ({ forecast }) => {
  // Group forecast data by unique date
  const uniqueDays = forecast.list.reduce((acc, day) => {
    const date = new Date(day.dt * 1000).toLocaleDateString();
    // Check if the date already exists in the accumulator
    if (!acc.some(entry => entry.date === date)) {
      acc.push({
        date,
        temp: day.main.temp,
        condition: day.weather[0].description,
      });
    }
    return acc;
  }, []);

  return (
    <div className="mt-4">
      <h3 className="text-center text-primary">5-Day Forecast</h3>
      <div className="row">
        {uniqueDays.map((day, index) => (
          <div className="col-md-4 " key={index}>
            <div className="card mb-4 bg-info text-light">
              <div className="card-body text-center">
                <h5 className="card-title">{day.date}</h5>
                <p className="card-text">Temperature: {day.temp} °C</p>
                <p className="card-text">Condition: {day.condition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

