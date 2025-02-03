import { useState } from "react";
import { useEffect } from "react";

import Header from "../Header/Header.jsx";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants.js";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather } from "../../utils/weatherApi.js";
import { filterWeatherData } from "../../utils/weatherApi.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main
          weatherData={weatherData}
          onAddButtonClick={setActiveModal}
          handleCardClick={handleCardClick}
        />
        <ModalWithForm
          title="New garment"
          buttonText="Add garment"
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
        >
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
              required
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
              required
            />
          </label>
          <fieldset className="modal__fieldset">
            <legend className="modal__legend modal__label" required>
              Select the weather type:
            </legend>
            <label htmlFor="hot" className="modal__radio-input">
              <input
                type="radio"
                name="weather"
                id="hot"
                className="modal__input_radio"
              />{" "}
              Hot
            </label>
            <label htmlFor="warm" className="modal__radio-input">
              <input
                type="radio"
                name="weather"
                id="warm"
                className="modal__input_radio"
              />{" "}
              Warm
            </label>
            <label htmlFor="cold" className="modal__radio-input">
              <input
                type="radio"
                name="weather"
                id="cold"
                className="modal__input_radio"
              />{" "}
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          closeActiveModal={closeActiveModal}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
