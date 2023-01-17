import { useState } from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase-config";
import AddPropertyForm from "../../components/AddPropertyForm/AddPropertyForm";
import CreatePropertyConfirmation from "../../components/CreatePropertyConfirmation/CreatePropertyConfirmation";

const AddPropertyContainer = () => {
  const [newProperty, setNewProperty] = useState({});
  const [displayConfirmation, setDisplayConfirmation] = useState(false);

  const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
  const user = doc(db, "users", JSON.parse(ref));

  const getNewProperty = (property) => {
    setNewProperty(property);
    setDisplayConfirmation(!displayConfirmation);
  };

  const addNewProperty = async () => {
    if (newProperty.listingType === "sale") {
      await updateDoc(user, {
        forSale: arrayUnion(newProperty),
      });
    } else {
      await updateDoc(user, {
        forRent: arrayUnion(newProperty),
      });
    }
  };

  return (
    <div>
      {displayConfirmation && (
        <CreatePropertyConfirmation
          addNewProperty={addNewProperty}
          getNewProperty={getNewProperty}
        />
      )}
      <AddPropertyForm getNewProperty={getNewProperty} />
    </div>
  );
};

export default AddPropertyContainer;
