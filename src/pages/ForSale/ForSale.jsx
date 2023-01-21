import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase-config";
import Layout from "../../containers/Layout/Layout";
import PropertyContainer from "../../containers/PropertyContainer/PropertyContainer";

const ForSale = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [reloadProperties, setReloadProperties] = useState(false);
  const [propertyEntry, setPropertyEntry] = useState(0);
  const [command, setCommand] = useState("");
  const [soldProperty, setSoldProperty] = useState({});

  const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
  const userRef = doc(db, "users", JSON.parse(ref));

  const getProperties = async () => {
    const user = await getDoc(userRef);
    setProperties(user.data().forSale);
    setIsLoading(false);
  };

  const getPropertyEntry = (index, command) => {
    setCommand(command);
    setSoldProperty(properties[index]);
    setPropertyEntry(index);
  };

  const updateProperty = async () => {
    const updatedProperties = properties.filter(
      (property, index) => index !== propertyEntry
    );
    await updateDoc(userRef, {
      forSale: updatedProperties,
    });
    if (command === "sold") {
      await updateDoc(userRef, {
        sold: arrayUnion(soldProperty),
      });
    }
    setReloadProperties(!reloadProperties);
  };

  useEffect(() => {
    getProperties();
  }, [reloadProperties]);

  return (
    <Layout title="For Sale">
      {!isLoading && (
        <PropertyContainer
          properties={properties}
          getPropertyEntry={getPropertyEntry}
          updateProperty={updateProperty}
          displaySold={true}
        />
      )}
    </Layout>
  );
};

export default ForSale;
