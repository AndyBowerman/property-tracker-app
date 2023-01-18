import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutConfirmation from "../../components/LogoutConfirmation/LogoutConfirmation";
import Nav from "../../components/Nav/Nav";
import "./Layout.scss";

const Layout = ({ children }) => {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const navigate = useNavigate();

  const displayConfirmation = () => {
    setConfirmLogout(!confirmLogout);
  };

  const logOut = () => {
    navigate("/");
  };

  return (
    <div className="layout">
      {confirmLogout && (
          <LogoutConfirmation
            toggleConfirmation={displayConfirmation}
            logOut={logOut}
          />
        )}
      <nav className="layout__nav">
        <Nav toggleConfirmation={displayConfirmation} />
      </nav>
      <main className="layout__main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
