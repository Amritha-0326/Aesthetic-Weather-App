import { useState } from "react";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import clouds from "./assets/pixelated-pink-cloud-art.png";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("London");
  const { data, loading, error } = useWeather(city);

  return (
    <div className="desktop">
      <div className="weather-window">
        {/* Title bar */}
        <div className="title-bar">
          <span>Weather</span>
          <div className="window-buttons">
            <div></div>
            <div></div>
          </div>
        </div>

        {/* Content */}
        <div className="window-content">
          <img
            src={clouds}
            alt="pixel cloud"
            className="floating-cloud"
           />
          <div className="weather-info">
            <SearchBar onSearch={setCity} />

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && <WeatherCard data={data} />}
          </div>

          {/* Pixel clouds */}
          <div className="clouds"></div>
        </div>
      </div>
    </div>
  );
}
