import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import SoldPropertiesCard from "../../components/SoldPropertiesCard/SoldPropertiesCard";

const SoldPropertiesContainer = () => {
  const [properties, setProperties] = useState([]);

  const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
  const user = doc(db, "users", JSON.parse(ref));

  const getUser = async () => {
    const currentUser = await getDoc(user);
    setProperties(currentUser.data().sold);
    console.log(currentUser.data().sold)
  }

  useEffect(() => {
    getUser();
  }, [])

//   const renderProperties = properties?.map((property, index) => {
//     <SoldPropertiesCard
//         key={index}
//         title={property.title}
//         bedrooms={property.bedrooms}
//         bathrooms={property.bathrooms}
//         description={property.description}
//         mainImg={property.mainImg}
//         propertyType={property.propertyType}
//         value={property.value}
//     />
//   })

const renderProperties = <SoldPropertiesCard title={"hi"}/>

  return <SoldPropertiesCard title="hi" bedrooms={2} />
};

export default SoldPropertiesContainer;
