import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase-config";
import AddPropertyForm from "../../components/AddPropertyForm/AddPropertyForm";
import ConfirmationPopUp from '../../components/ConfirmationPopUp/ConfirmationPopUp';

const AddPropertyContainer = () => {
  const [newProperty, setNewProperty] = useState({});
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const navigate = useNavigate();

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
    navigate('/home')
  };

  return (
    <div className="add-property-container">
      {displayConfirmation && <ConfirmationPopUp message="Create listing?" confirmMessage="Confirm" cancelMessage="Cancel" confirm={addNewProperty} cancel={getNewProperty} />}
      <AddPropertyForm getNewProperty={getNewProperty} />
    </div>
  );
};

export default AddPropertyContainer;
