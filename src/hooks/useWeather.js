import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export function useWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;
    console.log(process.env.REACT_APP_API_KEY);

    setLoading(true);
    setError(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(setData)
      // .catch(() => setError("Could not fetch weather"))
      .catch((err) =>{
        console.error("Weather fetch error : ", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [city]);

  return { data, loading, error };
}
