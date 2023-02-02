import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase-config";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import "./UpdateProperty.scss";

const UpdateProperty = ({ close, index, type, getUpdatedProperties }) => {
  const [property, setProperty] = useState({});
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
  const userRef = doc(db, "users", JSON.parse(ref));

  const getProperties = async () => {
    const user = await getDoc(userRef);
    if (type === "sale") {
      setProperty(user.data().forSale[index]);
      setProperties(user.data().forSale);
    } else if (type === "rental") {
      setProperty(user.data().forRent[index]);
      setProperties(user.data().forRent);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getProperties();
  }, []);

  const getUpdatedProperty = (num, val) => {
    if (num === 1) {
      setProperty({ ...property, title: val });
    } else if (num === 2) {
      setProperty({ ...property, bedrooms: val });
    } else if (num === 3) {
      setProperty({ ...property, bathrooms: val });
    } else if (num === 4) {
      setProperty({ ...property, description: val });
    } else if (num === 5) {
      setProperty({ ...property, propertyType: val });
    } else if (num === 6) {
      setProperty({ ...property, value: val });
    } else if (num === 7) {
      setProperty({ ...property, mainImg: [...property.mainImg, val] });
    }
  };

  const deleteImages = (val) => {
    const filteredImages = property.mainImg.filter(img => img !== val);
    setProperty({...property, mainImg: filteredImages})
  }

  const commitUpdatedProperty = async (e) => {
    e.preventDefault();
    properties.splice(index, 1, property);
    if (type === "sale") {
      await updateDoc(userRef, {
        forSale: properties,
      });
    } else if (type === "rental") {
      await updateDoc(userRef, {
        forRent: properties,
      });
    }
    close(0, "");
    getUpdatedProperties();
  };

  return (
    <div className="update-property">
      {!isLoading && (
        <UpdateForm
          property={property}
          close={close}
          getUpdatedProperty={getUpdatedProperty}
          commitUpdatedProperty={commitUpdatedProperty}
          deleteImages={deleteImages}
        />
      )}
    </div>
  );
};

export default UpdateProperty;
