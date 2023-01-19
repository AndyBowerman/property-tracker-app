import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import Layout from "../../containers/Layout/Layout";
import ForSaleContainer from "../../containers/ForSaleContainer/ForSaleContainer";

const ForSale = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});

  const usersCollectionRef = collection(db, "users");

  const getUser = async () => {
    const data = await getDocs(usersCollectionRef);
    const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
    const currentUser = data.docs.filter(
      (user) => user._key.path.segments[6] === JSON.parse(ref)
    );
    setUser(currentUser[0]._document.data.value.mapValue.fields);
    console.log(currentUser[0]._document.data.value.mapValue.fields.forSale.arrayValue.values);
    setIsLoading(false);
  };  

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      {!isLoading && <ForSaleContainer properties={user.forSale.arrayValue.values} />}
    </Layout>
  );
};

export default ForSale;
