import { Link } from "react-router-dom";

const HomeOptions = () => {
  return (
    <ul>
      <Link to="/add-property"><li>Add Property</li></Link>
      <Link to="/for-sale"><li>View Properties For Sale</li></Link>
      <Link to="/for-rent"><li>View Properties For Rent</li></Link>
      <li>View Sold / Rented Properties</li>
      <li>View Unsold / Unrented Properties</li>
    </ul>
  );
};

export default HomeOptions;
