import { useState } from "react";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("London");
  const { data, loading, error } = useWeather(city);

  return (
    <div className="app">
      <SearchBar onSearch={setCity} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <WeatherCard data={data} />}
    </div>
  );
}
