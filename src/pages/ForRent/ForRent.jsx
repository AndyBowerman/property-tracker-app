import { useEffect, useState } from "react";
import { getDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase-config";
import Layout from "../../containers/Layout/Layout";
import PropertyContainer from "../../containers/PropertyContainer/PropertyContainer";
import UpdateProperty from "../../containers/UpdateProperty/UpdateProperty";

const ForRent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState({});
  const [reloadProperties, setReloadProperties] = useState(false);
  const [propertyEntry, setPropertyEntry] = useState(0);
  const [command, setCommand] = useState("");
  const [rentedProperty, setRentedProperty] = useState({});

  const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
  const userRef = doc(db, "users", JSON.parse(ref));

  const getProperties = async () => {
    const user = await getDoc(userRef);
    setProperties(user.data().forRent);
    setIsLoading(false);
  };

  const getPropertyEntry = (index, command) => {
    setCommand(command);
    setRentedProperty(properties[index]);
    setPropertyEntry(index);
  };

  const updateProperty = async () => {
    const updatedProperties = properties.filter(
      (property, index) => index !== propertyEntry
    );
    await updateDoc(userRef, {
      forRent: updatedProperties,
    });
    if (command === "sold") {
      await updateDoc(userRef, {
        sold: arrayUnion(rentedProperty),
      });
    }
    setReloadProperties(!reloadProperties);
  };

  const getUpdatedProperties = () => setReloadProperties(!reloadProperties);

  useEffect(() => {
    getProperties();
  }, [reloadProperties]);

  return (
    <Layout title="For Rent">
      {!isLoading && (
        <>
        <PropertyContainer
          properties={properties}
          getPropertyEntry={getPropertyEntry}
          updateProperty={updateProperty}
          displaySold={true}
        />
        {command === "update" && <UpdateProperty close={getPropertyEntry} index={propertyEntry} type="rental" getUpdatedProperties={getUpdatedProperties} />}
        </>
        
      )}
    </Layout>
  );
};

export default ForRent;
