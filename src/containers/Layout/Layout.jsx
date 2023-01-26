import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationPopUp from "../../components/ConfirmationPopUp/ConfirmationPopUp";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import "./Layout.scss";

const Layout = ({ children, title }) => {
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
        <ConfirmationPopUp
          message="Are you sure you want to log out?"
          confirmMessage="Yes, log out"
          cancelMessage="Cancel"
          confirm={logOut}
          cancel={displayConfirmation}
        />
      )}
      <nav className="layout__nav">
        <Nav toggleConfirmation={displayConfirmation} title={title} />
      </nav>
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
