import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Webpage logo" />
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <button
        type="button"
        onClick={handleAddClick}
        className="header__add-clothes-button"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Name</p>
        <img src={avatar} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
