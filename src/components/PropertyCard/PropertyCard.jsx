import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import "./PropertyCard.scss";

const PropertyCard = ({
  index,
  title,
  bedrooms,
  bathrooms,
  description,
  mainImg,
  supportImg,
  propertyType,
  value,
  getPropertyEntry,
  displaySold,
  listingType,
}) => {
  return (
    <div className="property-card">
      <div className="property-card__container--img">
        <img
          src={mainImg}
          className="property-card__img"
          alt="Property for sale"
        />
      </div>
      <div className="property-card__container--text">
        <h1 className="property-card__title">{title}</h1>
        <ul className="property-card__list">
          <li className="property-card__item">
            <BedIcon /> {bedrooms} Bedrooms
          </li>
          <li className="property-card__item">
            <ShowerIcon /> {bathrooms} Bathrooms
          </li>
        </ul>
        <p className="property-card__description">{description}</p>
        <p className="property-card__type">Property type: {propertyType}</p>
        <p className="property-card__value">£{value}</p>
        <div className="property-card__container--btn">
          {displaySold ? (
            <button
              onClick={() => getPropertyEntry(index, "sold")}
              className="property-card__btn property-card__btn--sold"
            >
              Sold / Rented
            </button>
          ) : (
            <p className="property-card__complete">Listing Complete!</p>
          )}
          <button
            onClick={() => getPropertyEntry(index, "delete")}
            className="property-card__btn property-card__btn--delete"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
