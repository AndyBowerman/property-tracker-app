import "./ConfirmationPopUp.scss";

const ConfirmationPopUp = ({ message, confirmMessage, cancelMessage, confirm, cancel }) => {
  return (
    <div className="logout-confirmation">
      <div className="logout-confirmation__pop-up">
        <h2 className="logout-confirmation__title">
          {message}
        </h2>
        <div className="logout-confirmation__container">
          <button className="logout-confirmation__logout" onClick={confirm}>
            {confirmMessage}
          </button>
          <button
            className="logout-confirmation__remain"
            onClick={() => cancel(0, "sold")}
          >
            {cancelMessage}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
