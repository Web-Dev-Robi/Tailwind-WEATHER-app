import React from 'react';
import ReactAnimatedWeather from "react-animated-weather";







const WeatherList = ({ data }) => {

  return (
    <div className="flex flex-col">
      {data.map((data, index) =>
        <ul key={index} className="place-self-center">
          <div>
            {" "}
            {(() => {
              const defaults = {
                color: "white",
                size: 112,
                animate: true,
              };
              switch (data.weather[0].main) {
                case "Haze": return <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}>
                  {data.weather[0].main}
                </ReactAnimatedWeather>;
                case "Clouds": return <ReactAnimatedWeather
                  icon="CLOUDY"
                  color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}>
                  {data.weather[0].main}
                </ReactAnimatedWeather>;
                case "Rain": return <ReactAnimatedWeather
                  icon="RAIN" color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}>
                  {data.weather[0].main}
                </ReactAnimatedWeather >
                case "Snow": return <ReactAnimatedWeather
                  icon="SNOW"
                  color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}>
                  {data.weather[0].main}
                </ReactAnimatedWeather>
                case "Dust": return <ReactAnimatedWeather
                  icon="WIND"
                  color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}>
                  {data.weather[0].main}
                </ReactAnimatedWeather>
                case "Drizzle": return <ReactAnimatedWeather
                  icon="SLEET"
                  color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}>
                  {data.weather[0].main}
                </ReactAnimatedWeather>
                case "Fog": return <ReactAnimatedWeather
                  icon="FOG" color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}>
                  {data.weather[0].main}
                </ReactAnimatedWeather>
                case "Smoke": return <ReactAnimatedWeather
                  icon="FOG" color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}>
                  {data.weather[0].main}
                </ReactAnimatedWeather>
                case "Tornado": return <ReactAnimatedWeather
                  icon="WIND" color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}>
                  {data.weather[0].main}
                </ReactAnimatedWeather>
                default: return <ReactAnimatedWeather
                  icon="CLEAR_DAY" color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}>
                  {data.weather[0].main}
                </ReactAnimatedWeather>
              }
            })()}</div>
          <li>Location: {data.name}</li>
          <li>Weather: {data.weather[0].description}</li>
          <li>Temp: {data.main.temp} C</li>
          <li>Feels Like: {data.main.feels_like} C</li>
          <li>Pressure: {data.main.pressure}</li>
          <li>Humidity: {data.main.humidity}</li>
          <li>Minimum Temp: {data.main.temp_min} C</li>
          <li>Max Temp: {data.main.temp_max} C</li>
          <li>Visibility: {data.visibility}</li>
          <li>Wind Speed: {data.wind.speed} kph</li>
        </ul>
      )}
    </div>
  );
};

export default WeatherList;