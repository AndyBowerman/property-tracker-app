import { Link } from "react-router-dom";
import "./Nav.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Nav = ({ toggleConfirmation }) => {
  return (
    <ul className="nav">
      <Link to="/home" className="nav__link">
      <HomeOutlinedIcon />
        <li className="nav__text">Home</li>
      </Link>
      <div className="nav__link">
        <LogoutOutlinedIcon />
        <li onClick={toggleConfirmation} className="nav__text">
        Logout
      </li>
      </div>
      
    </ul>
  );
};

export default Nav;
