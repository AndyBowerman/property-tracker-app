import { Link } from "react-router-dom";
import './LoginInput.scss';

const LoginInput = ({ login, message }) => {
  return (
    <div className="login-input">
      <form className="login-input__form" onSubmit={login}>
        <input className="login-input__text" type="text" placeholder="Username" name="userName" required />
        <input className="login-input__text" type="password" placeholder="Password" name="password" required />
        <button className="login-input__submit" type="submit">Login</button>
        <p className="login-input__message">{message}</p>
      </form>
      <Link to="/create-user" className="login-input__link">Register</Link>
    </div>
  );
};

export default LoginInput;
