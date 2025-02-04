import "./ModalWithForm.css";
import closebtn from "../../assets/closebtn.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  closeActiveModal,
  isOpen,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          onClick={closeActiveModal}
          className="modal__close"
        >
          <img
            src={closebtn}
            className="modal__close-image"
            alt="close button"
          />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
