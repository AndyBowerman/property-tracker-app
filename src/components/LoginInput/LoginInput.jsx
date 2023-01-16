import { Link } from "react-router-dom";

const LoginInput = ({ login, message }) => {
  return (
    <div>
      <form onSubmit={login}>
        <input type="text" placeholder="Username" name="userName" required />
        <input type="text" placeholder="Password" name="password" required />
        <button type="submit">Login</button>
        <p>{message}</p>
      </form>
      <Link to="/create-user">Register</Link>
    </div>
  );
};

export default LoginInput;
