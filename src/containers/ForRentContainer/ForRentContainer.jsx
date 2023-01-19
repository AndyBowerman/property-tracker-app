import ForRentCard from "../../components/ForRentCard/ForRentCard";

const ForRentContainer = ({properties}) => {
    const renderProperties = properties?.map((property, index) => (
        <ForRentCard
          key={index}
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
    
      return <div>{properties ? renderProperties : <h1>No Properties Available</h1>}</div>;
}

export default ForRentContainer
