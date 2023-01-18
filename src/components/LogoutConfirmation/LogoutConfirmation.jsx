import "./LogoutConfirmation.scss";

const LogoutConfirmation = ({ toggleConfirmation, logOut }) => {
  return (
    <div className="logout-confirmation">
      <div className="logout-confirmation__pop-up">
        <h2 className="logout-confirmation__title">
          Are you sure you want to log out?
        </h2>
        <div className="logout-confirmation__container">
          <button className="logout-confirmation__logout" onClick={logOut}>
            Yes, log out
          </button>
          <button
            className="logout-confirmation__remain"
            onClick={toggleConfirmation}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
