export default function WeatherCard({ data }) {
    return (
      <div className="card">
        <h2>{data.name}</h2>
        <h1>{Math.round(data.main.temp)}°C</h1>
        <p>{data.weather[0].description}</p>
      </div>
    );
  }
  