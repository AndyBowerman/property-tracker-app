import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutConfirmation from "../../components/LogoutConfirmation/LogoutConfirmation";
import Nav from "../../components/Nav/Nav";

const Layout = ({ children }) => {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const navigate = useNavigate();

  const displayConfirmation = () => {
    setConfirmLogout(!confirmLogout);
  };

  const logOut = () => {
    navigate("/");
  }

  return (
    <div>
      {confirmLogout && (
        <LogoutConfirmation toggleConfirmation={displayConfirmation} logOut={logOut} />
      )}
      <Nav toggleConfirmation={displayConfirmation} />
      {children}
    </div>
  );
};

export default Layout;
