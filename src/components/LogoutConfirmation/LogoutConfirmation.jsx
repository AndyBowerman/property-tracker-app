const LogoutConfirmation = ({ toggleConfirmation, logOut }) => {
  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={logOut}>Yes</button>
      <button onClick={toggleConfirmation}>No</button>
    </div>
  );
};

export default LogoutConfirmation;
