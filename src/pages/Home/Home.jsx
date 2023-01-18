import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import Layout from "../../containers/Layout/Layout";
import "./Home.scss";
import HomeOptions from "../../components/HomeOptions/HomeOptions";

const Home = () => {
  const [message, setMessage] = useState("Good Morning");

  const usersCollectionRef = collection(db, "users");

  const getUser = async () => {
    const data = await getDocs(usersCollectionRef);
    const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
    const currentUser = data.docs.filter(
      (user) => user._key.path.segments[6] === JSON.parse(ref)
    );
    const today = new Date();

    if (today.getHours() >= 0 && today.getHours() < 4) {
      setMessage(
        "Good Night " +
          currentUser[0]._document.data.value.mapValue.fields.firstName
            .stringValue
      );
    } else if (today.getHours() >= 4 && today.getHours() < 12) {
      setMessage(
        "Good Morning " +
          currentUser[0]._document.data.value.mapValue.fields.firstName
            .stringValue
      );
    } else if (today.getHours() >= 12 && today.getHours() < 17) {
      setMessage(
        "Good Afternoon " +
          currentUser[0]._document.data.value.mapValue.fields.firstName
            .stringValue
      );
    } else if (today.getHours() >= 17 && today.getHours() <= 23) {
      setMessage(
        "Good Evening " +
          currentUser[0]._document.data.value.mapValue.fields.firstName
            .stringValue
      );
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Layout>
      <div className="home">
        <div className="home__container">
          <h1 className="home__title">{message}</h1>
        </div>        
        <HomeOptions />
      </div>
    </Layout>
  );
};

export default Home;
