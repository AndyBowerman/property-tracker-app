import { useState } from "react";
import ConfirmationPopUp from "../../components/ConfirmationPopUp/ConfirmationPopUp";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "./PropertyContainer.scss";

const PropertyContainer = ({
  properties,
  getPropertyEntry,
  updateProperty,
  displaySold,
}) => {
  const [message, setMessage] = useState("");
  const [displayConfirmation, setDisplayConfirmation] = useState(false);

  const setConfirmationMessage = (index, command) => {
    if (command === "sold") {
      setMessage("Take this property off the market?");
    } else {
      setMessage("Are you sure you would like to delete this property?");
    }
    setDisplayConfirmation(!displayConfirmation);
    getPropertyEntry(index, command);
  };

  const renderProperties = properties?.map((property, index) => {
    return (
      <PropertyCard
        key={index}
        index={index}
        title={property.title}
        bedrooms={property.bedrooms}
        bathrooms={property.bathrooms}
        description={property.description}
        mainImg={property.mainImg}
        propertyType={property.propertyType}
        value={property.value}
        getPropertyEntry={setConfirmationMessage}
        displaySold={displaySold}
      />
    );
  });

  return (
    <div className="property-container">
      {displayConfirmation && (
        <ConfirmationPopUp
          message={message}
          confirmMessage="Confirm"
          cancelMessage="Cancel"
          confirm={() => {
            setDisplayConfirmation(!displayConfirmation)
            updateProperty();
          }}
          cancel={setConfirmationMessage}
        />
      )}
      {properties ? (
        renderProperties
      ) : (
        <h1 className="for-sale-container__title">
          There are no properties currently available
        </h1>
      )}
    </div>
  );
};

export default PropertyContainer;
