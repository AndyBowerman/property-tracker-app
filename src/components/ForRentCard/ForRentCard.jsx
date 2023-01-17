import React from "react";

const ForRentCard = ({
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
    <div>
      <h1>{title}</h1>
      <ul>
        <li>Bedrooms: {bedrooms}</li>
        <li>Bathrooms: {bathrooms}</li>
      </ul>
      <p>{description}</p>
      <img src={mainImg} alt="Property for rent" />
      <p>{propertyType}</p>
      <p>£{value}</p>
    </div>
  );
};

export default ForRentCard;
