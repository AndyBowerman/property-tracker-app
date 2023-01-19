import "./ForSaleCard.scss";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";

const ForSaleCard = ({
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
    <div className="for-sale-card">
      <div className="for-sale-card__container--img">
        <img
          src={mainImg}
          className="for-sale-card__img"
          alt="Property for sale"
        />
      </div>
      <div className="for-sale-card__container--text">
        <h1 className="for-sale-card__title">{title}</h1>
        <ul className="for-sale-card__list">
          <li className="for-sale-card__item">
            <BedIcon /> {bedrooms} Bedrooms
          </li>
          <li className="for-sale-card__item">
            <ShowerIcon /> {bathrooms} Bathrooms
          </li>
        </ul>
        <p className="for-sale-card__description">{description}</p>
        <p className="for-sale-card__type">Property type: {propertyType}</p>
        <p className="for-sale-card__value">£{value}</p>
        <div className="for-sale-card__container--btn">
          <button className="for-sale-card__btn for-sale-card__btn--sold">
            Sold
          </button>
          <button className="for-sale-card__btn for-sale-card__btn--delete">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForSaleCard;
