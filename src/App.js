import { useState } from "react";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import clouds from "./assets/pixelated-pink-cloud-art.png";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("London");
  const { data, loading, error } = useWeather(city);

  // ← Move these inside the component
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleMinimize = () => setIsMinimized(prev => !prev);

  return (
    <div className="desktop">
      {isOpen && (
        <div className="weather-window">
          {/* Title bar */}
          <div className="title-bar">
            <span>Weather</span>
            <div className="window-buttons">
              <button className="window-btn minimize" onClick={handleMinimize}>−</button>
              <button className="window-btn close" onClick={handleClose}>×</button>
            </div>
          </div>

          {!isMinimized && (
            <div className="window-content">
              <img src={clouds} alt="pixel cloud" className="floating-cloud cloud1" />
              <img src={clouds} alt="pixel cloud" className="floating-cloud cloud2" />
              <div className="weather-info">
                <SearchBar onSearch={setCity} />
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && <WeatherCard data={data} />}
              </div>
              <div className="clouds"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
