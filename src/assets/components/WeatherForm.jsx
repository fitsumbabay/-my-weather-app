import  { useRef } from "react";
const WeatherForm = ({ fetchWeather }) => {
const cityInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = cityInputRef.current.value; // Access the value of the input using the ref
    fetchWeather(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-inline justify-content-center mb-4"
    >
      <input
        type="text"
        className="form-control mr-2"
        placeholder="Enter city"
        required
        ref={cityInputRef}
      />
      <button type="submit" className="btn btn-primary">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;