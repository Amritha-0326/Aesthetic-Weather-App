export default function ForecastList({ forecast}){
    if (!forecast?.length) return null;

    return(
        <div className="forcast">
            {forecast.map((day, index)=> (
                <div  key={index} className="forcast-day">
                    <p>{day.date}</p>
                    <p>{Math.round(day.temp)} deg C </p>
                </div>
            ))}
        </div>
    );
}