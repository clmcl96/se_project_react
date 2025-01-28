import "./Weathercard.css";
import cloudy from "../../assets/cloudy.png";

function Weathercard() {
  return (
    <section className="weathercard">
      <p className="weathercard__temp">75&deg;F</p>
      <img src={cloudy} alt="cloudy" className="weathercard__image" />
    </section>
  );
}

export default Weathercard;
