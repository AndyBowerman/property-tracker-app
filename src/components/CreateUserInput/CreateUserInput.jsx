import { Link } from "react-router-dom";

const CreateUserInput = ({ createUser, message }) => {
  return (
    <div>
      <form onSubmit={createUser}>
        <input type="text" placeholder="Username" required name="userName" />
        <input type="text" placeholder="First Name" required name="firstName" />
        <input type="text" placeholder="Last Name" required name="lastName" />
        <input type="text" placeholder="Password" required name="password" />
        <input
          type="text"
          placeholder="Re-type Password"
          required
          name="password2"
        />
        <p>{message}</p>
        <button type="submit">Create New User</button>
      </form>
      <Link to="/">Login</Link>
    </div>
  );
};

export default CreateUserInput;
