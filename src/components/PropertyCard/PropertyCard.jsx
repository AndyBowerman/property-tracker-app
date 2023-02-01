import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import { useEffect } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./PropertyCard.scss";

const PropertyCard = ({
  index,
  title,
  bedrooms,
  bathrooms,
  description,
  mainImg,
  propertyType,
  value,
  listingType,
  getPropertyEntry,
  displaySold,
}) => {
  const formatNumber = (num) => {
    return parseInt(num).toLocaleString();
  };

  return (
    <div className="property-card">
      <div className="property-card__dec--bottom"></div>
      <div className="property-card__dec--top"></div>
      <div className="property-card__dec--left"></div>
      <div className="property-card__container--img">
        <p className="property-card__value">
          £{formatNumber(value)}
          {listingType === "rental" && " PCM"}
        </p>
        <ImageCarousel images={mainImg} />
      </div>
      <div className="property-card__container--text">
        <div>
          <h1 className="property-card__title">{title}</h1>
          <p className="property-card__description">{description}</p>
          <p className="property-card__type">
            Property type: <b>{propertyType}</b>
          </p>
          <ul className="property-card__list">
            <li className="property-card__item">
              <BedIcon /> {bedrooms} Bedrooms
            </li>
            <li className="property-card__item">
              <ShowerIcon /> {bathrooms} Bathrooms
            </li>
          </ul>
        </div>
        <div className="property-card__container--btn">
          {displaySold ? (
            <><button
              onClick={() => getPropertyEntry(index, "sold")}
              className="property-card__btn property-card__btn--sold"
            >
              {listingType === "rental" ? "Let Agreed" : "Sold"}
            </button>
            <button className="property-card__btn property-card__btn--update">Update</button>
            <button
              onClick={() => getPropertyEntry(index, "delete")}
              className="property-card__btn property-card__btn--delete"
            >
              Remove
            </button>
            </>
          ) : (
            <>
<button className="property-card__btn property-card__btn--update">Update</button>
          <button
            onClick={() => getPropertyEntry(index, "delete")}
            className="property-card__btn property-card__btn--delete"
          >
            Remove
          </button>
            <p className="property-card__complete">
              {listingType === "rental" ? "Let Agreed STC" : "Sold STC"}
            </p>
            </>
            
          )}
          
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
