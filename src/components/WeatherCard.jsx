export default function WeatherCard({ data }) {
  return (
    <>
      <div className="temp">
        <h4>{data.name}</h4>
        {Math.round(data.main.temp)}°C
      </div>
      <div className="desc">
        {data.weather[0].description}
      </div>
    </>
  );
}
