import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";

const SoldPropertiesCard = ({
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
    <div className="sold-properties-card">
      <div className="sold-properties-card__container--img">
        <img
          src={mainImg}
          className="sold-properties-card__img"
          alt="Property for sale"
        />
      </div>
      <div className="sold-properties-card__container--text">
        <h1 className="sold-properties-card__title">{title}</h1>
        <ul className="sold-properties-card__list">
          <li className="sold-properties-card__item">
            <BedIcon /> {bedrooms} Bedrooms
          </li>
          <li className="sold-properties-card__item">
            <ShowerIcon /> {bathrooms} Bathrooms
          </li>
        </ul>
        <p className="sold-properties-card__description">{description}</p>
        <p className="sold-properties-card__type">Property type: {propertyType}</p>
        <p className="sold-properties-card__value">£{value}</p>
        <div className="sold-properties-card__container--btn">
          <button className="sold-properties-card__btn sold-properties-card__btn--delete">
            Remove
          </button>
        </div>
      </div>
    </div>
  )
};

export default SoldPropertiesCard;
