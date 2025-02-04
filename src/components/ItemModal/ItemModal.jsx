import "./ItemModal.css";
import closebtn from "../../assets/closebtn.png";

function ItemModal({ activeModal, closeActiveModal, card, isOpen }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          onClick={closeActiveModal}
          className="modal__close modal__clothing_close"
        >
          <img
            src={closebtn}
            className="modal__close-image"
            alt="close button"
          />
        </button>
        <img src={card.link} alt="clothing card" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
