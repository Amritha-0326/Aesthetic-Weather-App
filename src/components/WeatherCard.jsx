export default function WeatherCard({ data }) {
  return (
    <>
      <div className="temp">
        <h3>{data.name}</h3>
        {Math.round(data.main.temp)}°C
      </div>
      <div className="desc">
        {data.weather[0].description}
      </div>
    </>
  );
}
