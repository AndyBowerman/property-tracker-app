import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ toggleConfirmation }) => {
  return (
    <ul>
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/add-property">
        <li>Add New Property</li>
      </Link>
      <Link to="/for-sale">
        <li>For Sale</li>
      </Link>
      <Link to="/for-rent">
        <li>For Rent</li>
      </Link>
      <li>Sold / Rented Properties</li>
      <li onClick={toggleConfirmation}>Logout</li>
    </ul>
  );
};

export default Nav;
