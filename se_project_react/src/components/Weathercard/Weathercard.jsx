import "./Weathercard.css";
import cloudy from "../../assets/cloudy.png";

function Weathercard({ weatherData }) {
  return (
    <section className="weathercard">
      <p className="weathercard__temp">{weatherData.temp.F}&deg;F</p>
      <img src={cloudy} alt="cloudy" className="weathercard__image" />
    </section>
  );
}

export default Weathercard;
