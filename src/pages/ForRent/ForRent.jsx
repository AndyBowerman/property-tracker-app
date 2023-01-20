import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import Layout from "../../containers/Layout/Layout";
import ForRentContainer from "../../containers/ForRentContainer/ForRentContainer";

const ForRent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState({});
  const [reloadProperties, setReloadProperties] = useState(false);

  const usersCollectionRef = collection(db, "users");
  const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
  const user = doc(db, "users", JSON.parse(ref));

  const getUser = async () => {
    const data = await getDocs(usersCollectionRef);
    const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
    const currentUser = data.docs.filter(
      (user) => user._key.path.segments[6] === JSON.parse(ref)
    );
    setProperties(
      currentUser[0]._document.data.value.mapValue.fields.forRent.arrayValue
        .values
    );
    setIsLoading(false);
  };

  const updateProperty = async (propertyEntry, command, rentedProperty) => {
    const filteredProperties = properties
      .filter((property, index) => index !== propertyEntry)
      .map((property) => {
        return {
          title: property.mapValue.fields.title.stringValue,
          bedrooms: property.mapValue.fields.bedrooms.stringValue,
          bathrooms: property.mapValue.fields.bathrooms.stringValue,
          description: property.mapValue.fields.description.stringValue,
          mainImg: property.mapValue.fields.mainImg.stringValue,
          supportImg: [],
          propertyType: property.mapValue.fields.propertyType.stringValue,
          value: property.mapValue.fields.value.stringValue,
          listingType: property.mapValue.fields.listingType.stringValue,
        };
      });
      console.log(filteredProperties)
    await updateDoc(user, {
      forRent: filteredProperties,
    });
    if (command === "rented") {
      await updateDoc(user, {
        sold: arrayUnion(rentedProperty),
      });
    }
    setReloadProperties(!reloadProperties);
  };

  useEffect(() => {
    getUser();
  }, [reloadProperties]);

  return (
    <Layout title="For Rent">
      {!isLoading && (
        <ForRentContainer
          properties={properties}
          updateProperty={updateProperty}
        />
      )}
    </Layout>
  );
};

export default ForRent;
