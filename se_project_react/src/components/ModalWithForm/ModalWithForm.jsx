import "./ModalWithForm.css";
import closebtn from "../../assets/closebtn.png";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New Garment</h2>
        <button type="button" className="modal__close">
          <img src={closebtn} className="modal__close-image" />
        </button>
        <form className="modal__form">
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
              <input type="radio" id="hot" className="modal__input_radio" /> Hot
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
          <button type="submit" className="modal__submit">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
