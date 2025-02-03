import "./ModalWithForm.css";
import closebtn from "../../assets/closebtn.png";
import activebtn from "../../assets/StateDefault.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  closeActiveModal,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" && "modal__opened"}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          onClick={closeActiveModal}
          className="modal__close"
        >
          <img src={closebtn} className="modal__close-image" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            <img src={activebtn} className="modal__submit-image-active" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
