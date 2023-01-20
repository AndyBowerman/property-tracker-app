import "./ForRentCard.scss";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";

const ForRentCard = ({
  getPropertyEntry,
  index,
  title,
  bedrooms,
  bathrooms,
  description,
  mainImg,
  supportImg,
  propertyType,
  value,
}) => {
  return (
    <div className="for-rent-card">
      <div className="for-rent-card__container--img">
        <img
          className="for-rent-card__img"
          src={mainImg}
          alt="Property for rent"
        />
      </div>
      <div className="for-rent-card__container--text">
        <h1 className="for-rent-card__title">{title}</h1>
        <ul className="for-rent-card__list">
          <li className="for-rent-card__item"><BedIcon /> {bedrooms} Bedrooms</li>
          <li className="for-rent-card__item"><ShowerIcon /> {bathrooms} Bathrooms</li>
        </ul>
        <p className="for-rent-card__description">{description}</p>
        <p className="for-rent-card__type">Property type: {propertyType}</p>
        <p className="for-rent-card__value">£{value} PCM</p>
        <div className="for-rent-card__container--btn">
          <button onClick={() => getPropertyEntry(index, "rented")} className="for-rent-card__btn for-rent-card__btn--rented">Rented</button>
          <button onClick={() => getPropertyEntry(index, "delete")} className="for-rent-card__btn for-rent-card__btn--delete">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default ForRentCard;
