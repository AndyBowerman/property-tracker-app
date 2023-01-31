import CreateUserInput from "../../components/CreateUserInput/CreateUserInput";
import LoginInput from "../../components/LoginInput/LoginInput";
import "./UserInput.scss";

const UserInput = ({
  login,
  createUser,
  message,
  successMessage,
  displayLogin,
}) => {
  return (
    <div className="user-input">
      <div className="user-input__img-container">
        <div className="user-input__cover"></div>
      </div>
      <div className="user-input__box user-input__box--main">
        {displayLogin && (
          <h1 className="user-input__title">Property Tracker</h1>
        )}
        {displayLogin ? (
          <LoginInput login={login} message={message} />
        ) : (
          <CreateUserInput
            createUser={createUser}
            message={message}
            successMessage={successMessage}
          />
        )}
      </div>
      <div className="user-input__box user-input__box--dec"></div>
    </div>
  );
};

export default UserInput;
