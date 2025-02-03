import "./WeatherCard.css";
import cloudy from "../../assets/cloudy.png";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function Weathercard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weathercard">
      <p className="weathercard__temp">{weatherData.temp.F}&deg;F</p>
      <img
        src={weatherOption?.url}
        alt={`${weatherOption?.condition}`}
        className="weathercard__image"
      />
    </section>
  );
}

export default Weathercard;
