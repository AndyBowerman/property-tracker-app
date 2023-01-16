import React from "react";

const LoginInput = ({ login }) => {
  return (
    <div>
      <form onSubmit={login}>
        <input type="text" placeholder="Username" name="userName" required />
        <input type="text" placeholder="Password" name="password" required />
        <button type="submit">Login</button>
      </form>
      <button>Register</button>
    </div>
  );
};

export default LoginInput;
