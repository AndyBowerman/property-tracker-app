import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase-config";
import Layout from "../../containers/Layout/Layout";
import PropertyContainer from "../../containers/PropertyContainer/PropertyContainer";

const SoldProperties = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [reloadProperties, setReloadProperties] = useState(false);
  const [propertyEntry, setPropertyEntry] = useState(0);
  const [command, setCommand] = useState("");
  const [currentProperty, setCurrentProperty] = useState({});
  const [listing, setListing] = useState("");

  const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
  const userRef = doc(db, "users", JSON.parse(ref));

  const getProperties = async () => {
    const user = await getDoc(userRef);
    setProperties(user.data().sold);
    setIsLoading(false);
  };

  const getPropertyEntry = (index, command, listingType) => {
    setCommand(command);
    setCurrentProperty(properties[index]);
    setPropertyEntry(index);
    setListing(listingType);
  };

  const reassignProperty = async () => {
    const updatedProperties = properties.filter(
      (property, index) => index !== propertyEntry
    );
    await updateDoc(userRef, {
      sold: updatedProperties,
    });
    if (command === "relist") {
      if (listing === "sale") {
        await updateDoc(userRef, {
          forSale: arrayUnion(currentProperty),
        });
      } else if (listing === "rental") {
        await updateDoc(userRef, {
          forRent: arrayUnion(currentProperty),
        });
      }
    }
    setReloadProperties(!reloadProperties);
  };

  useEffect(() => {
    getProperties();
  }, [reloadProperties]);

  return (
    <Layout title="Sold / Rented">
      {!isLoading && (
        <PropertyContainer
          properties={properties}
          getPropertyEntry={getPropertyEntry}
          updateProperty={reassignProperty}
          displaySold={false}
        />
      )}
    </Layout>
  );
};

export default SoldProperties;
