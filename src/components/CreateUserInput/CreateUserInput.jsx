import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './CreateUserInput.scss';

const CreateUserInput = ({ createUser, message, successMessage }) => {
  return (
    <div className="create-user-input">
      <form className="create-user-input__form" onSubmit={createUser}>
        <input className="create-user-input__text" type="text" placeholder="Username" required name="userName" />
        <input className="create-user-input__text" type="text" placeholder="First Name" required name="firstName" />
        <input className="create-user-input__text" type="text" placeholder="Last Name" required name="lastName" />
        <p className="create-user-input__instruction">Passwords must be at least 6 characters long and include at least one number.</p>
        <input className="create-user-input__text" type="password" placeholder="Password" required name="password" />
        <input className="create-user-input__text"
          type="password"
          placeholder="Re-type Password"
          required
          name="password2"
        />
        <p className={successMessage ? "create-user-input__success-message" : "create-user-input__failure-message"}>{message}</p>
        <Button type="submit" text="Create new user" />
      </form>
      <Link to="/" className="create-user-input__link">Login</Link>
    </div>
  );
};

export default CreateUserInput;
