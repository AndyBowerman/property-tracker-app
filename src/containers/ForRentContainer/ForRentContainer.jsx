import { useState } from "react";
import ConfirmationPopUp from "../../components/ConfirmationPopUp/ConfirmationPopUp";
import ForRentCard from "../../components/ForRentCard/ForRentCard";
import './ForRentContainer.scss';

const ForRentContainer = ({ properties, updateProperty }) => {
  const [propertyEntry, setPropertyEntry] = useState(0);
  const [command, setCommand] = useState("");
  const [message, setMessage] = useState("");
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [rentedProperty, setRentedProperty] = useState({});

  const getPropertyEntry = (index, command) => {
    setPropertyEntry(index);
    if (command === "rented") {
      setMessage("Confirm this property has been rented?");
    } else {
      setMessage("Are you sure you would like to delete this property?");
    }
    setCommand(command);
    setDisplayConfirmation(!displayConfirmation);
    setRentedProperty({
      title: properties[index].mapValue.fields.title.stringValue,
      bedrooms: properties[index].mapValue.fields.bedrooms.stringValue,
      bathrooms: properties[index].mapValue.fields.bathrooms.stringValue,
      description: properties[index].mapValue.fields.description.stringValue,
      mainImg: properties[index].mapValue.fields.mainImg.stringValue,
      supportImg: [],
      propertyType: properties[index].mapValue.fields.propertyType.stringValue,
      value: properties[index].mapValue.fields.value.stringValue,
      listingType: properties[index].mapValue.fields.listingType.stringValue,
    });
  };

  const renderProperties = properties?.map((property, index) => (
    <ForRentCard
      getPropertyEntry={getPropertyEntry}
      key={index}
      index={index}
      title={property.mapValue.fields.title.stringValue}
      bedrooms={property.mapValue.fields.bedrooms.stringValue}
      bathrooms={property.mapValue.fields.bathrooms.stringValue}
      description={property.mapValue.fields.description.stringValue}
      mainImg={property.mapValue.fields.mainImg.stringValue}
      supportImg={property.mapValue.fields.supportImg.arrayValue.values}
      propertyType={property.mapValue.fields.propertyType.stringValue}
      value={property.mapValue.fields.value.stringValue}
    />
  ));

  return (
    <div className="for-rent-container">
      {displayConfirmation && (
        <ConfirmationPopUp
          message={message}
          confirmMessage="Confirm"
          cancelMessage="Cancel"
          confirm={() => {
            updateProperty(propertyEntry, command, rentedProperty)
            setDisplayConfirmation(!displayConfirmation)
          }}
          cancel={getPropertyEntry}
        />
      )}
      {properties ? renderProperties : <h1 className="for-rent-container__title">There are no properties currently available</h1>}
    </div>
  );
};

export default ForRentContainer;
