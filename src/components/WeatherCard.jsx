import { useState } from "react";

export default function WeatherCard({ data }) {
  // State to track whether temperature is Celsius or Fahrenheit
  const [isCelsius, setIsCelsius] = useState(true);

  // Conversion helper
    const temp = isCelsius
    ? Math.round(data.main.temp)           // Celsius from API
    : Math.round((data.main.temp * 9) / 5 + 32); // Fahrenheit

  // Toggle handler
  const toggleTemp = () => setIsCelsius(prev => !prev);

  return (
    <div className="weather-card">
      <div className="temp">
        <p>{data.name}</p>
        {temp}°{isCelsius ? "C" : "F"}
      </div>
      <div className="desc">{data.weather[0].description}</div>

      <button className="temp-toggle" onClick={toggleTemp}>
        Show °{isCelsius ? "F" : "C"}
      </button>
    </div>
  );
}
