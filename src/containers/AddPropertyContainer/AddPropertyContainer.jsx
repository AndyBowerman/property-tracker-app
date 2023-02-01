import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase-config";
import AddPropertyForm from "../../components/AddPropertyForm/AddPropertyForm";
import ConfirmationPopUp from "../../components/ConfirmationPopUp/ConfirmationPopUp";
import bedroom from "../../assets/images/bedroom.jpg";
import kitchen from "../../assets/images/kitchen.jpg";
import livingRoom from "../../assets/images/livingRoom.jpg";
import garden from "../../assets/images/garden.jpg";
import "./AddPropertyContainer.scss";

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
    navigate("/home");
  };

  return (
    <div className="add-property-container">
      {displayConfirmation && (
        <ConfirmationPopUp
          message="Create listing?"
          confirmMessage="Confirm"
          cancelMessage="Cancel"
          confirm={addNewProperty}
          cancel={getNewProperty}
        />
      )}
      <div className="add-property-container__container">
        <AddPropertyForm getNewProperty={getNewProperty} />
      </div>
      <div className="add-property-container__container add-property-container__container--right">
      <img
          className="add-property-container__img add-property-container__img"
          src={kitchen}
          alt=""
        />
        <div className="add-property-container__dec add-property-container__dec--top"></div>
        <img
          className="add-property-container__img add-property-container__img--sm"
          src={bedroom}
          alt=""
        />
        <img
          className="add-property-container__img add-property-container__img--sm"
          src={garden}
          alt=""
        />
        <img
          className="add-property-container__img"
          src={livingRoom}
          alt=""
        />
        <div className="add-property-container__dec"></div>
      </div>
    </div>
  );
};

export default AddPropertyContainer;
