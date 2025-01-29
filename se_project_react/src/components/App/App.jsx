import { useState } from "react";

import Header from "../Header/Header.jsx";
import "./App.css";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [activeModal, setActiveModal] = useState("");

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} />
          <Main weatherData={weatherData} onAddButtonClick={setActiveModal} />
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
              />
            </label>
            <label htmlFor="imageUrl" className="modal__label">
              Image{" "}
              <input
                type="url"
                className="modal__input"
                id="imageUrl"
                placeholder="Image URL"
              />
            </label>
            <filedset className="modal__fieldset">
              <legend className="modal__legend modal__label">
                Select the weather type:
              </legend>
              <label htmlFor="hot" className="modal__radio-input">
                <input type="radio" id="hot" className="modal__input_radio" />{" "}
                Hot
              </label>
              <label htmlFor="warm" className="modal__radio-input">
                <input type="radio" id="warm" className="modal__input_radio" />{" "}
                Warm
              </label>
              <label htmlFor="cold" className="modal__radio-input">
                <input type="radio" id="cold" className="modal__input_radio" />{" "}
                Cold
              </label>
            </filedset>
          </ModalWithForm>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
