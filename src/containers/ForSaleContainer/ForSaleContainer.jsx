import ForSaleCard from "../../components/ForSaleCard/ForSaleCard";
import './ForSaleContainer.scss';

const ForSaleContainer = ({ properties }) => {
  const renderProperties = properties?.map((property, index) => (
    <ForSaleCard
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

  return <div className="for-sale-container">
    {properties ? renderProperties : <h1 className="for-sale-container__title">There Are No Properties Currently Available</h1>}
    </div>;
};

export default ForSaleContainer;
