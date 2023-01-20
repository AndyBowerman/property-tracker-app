import { Link } from "react-router-dom";
import './HomeOptions.scss';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const HomeOptions = () => {
  return (
    <ul className="home-options">
      <Link to="/add-property" className="home-options__link" id="link-blue">
        <AddHomeWorkIcon fontSize="large" />
        <li className="home-options__text">Create New Listings</li>
      </Link>
      <Link to="/for-sale" className="home-options__link" id="link-green">
      <HouseOutlinedIcon fontSize="large" />
        <li className="home-options__text">View Properties For Sale</li>
      </Link>
      <Link to="/for-rent" className="home-options__link" id="link-orange">
      <BedOutlinedIcon fontSize="large" />
        <li className="home-options__text">View Properties For Rent</li>
      </Link>
      <Link to="/sold" className="home-options__link" id="link-red">
        <KeyOutlinedIcon fontSize="large" />
        <li className="home-options__text">Sold / Rented Properties</li>
      </Link>
    </ul>
  );
};

export default HomeOptions;
