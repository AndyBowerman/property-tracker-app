import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

import morning from "../../assets/morning.svg";
import afternoon from "../../assets/afternoon.svg";
import evening from "../../assets/evening.svg";
import night from "../../assets/night.svg";
import Layout from "../../containers/Layout/Layout";
import Header from "../../components/Header/Header";
import "./Home.scss";
import HomeOptions from "../../components/HomeOptions/HomeOptions";

const Home = () => {
  const [message, setMessage] = useState("Good Morning");
  const [icon, setIcon] = useState(morning);

  const usersCollectionRef = collection(db, "users");

  const getUser = async () => {
    const data = await getDocs(usersCollectionRef);
    const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
    const currentUser = data.docs.filter(
      (user) => user._key.path.segments[6] === JSON.parse(ref)
    );
    const today = new Date();

    if (today.getHours() >= 0 && today.getHours() < 4) {
      setMessage("Good Night " + currentUser[0]._document.data.value.mapValue.fields.firstName.stringValue);
      setIcon(night);
    } else if (today.getHours() >= 4 && today.getHours() < 12) {
      setMessage("Good Morning " + currentUser[0]._document.data.value.mapValue.fields.firstName.stringValue);
      setIcon(morning);
    } else if (today.getHours() >= 12 && today.getHours() < 17) {
      setMessage("Good Afternoon " + currentUser[0]._document.data.value.mapValue.fields.firstName.stringValue);
      setIcon(afternoon);
    } else if (today.getHours() >= 17 && today.getHours() <= 23) {
      setMessage("Good Evening " + currentUser[0]._document.data.value.mapValue.fields.firstName.stringValue);
      setIcon(evening);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Layout>
        <img src={icon} alt="icon" className="icon" />
        <Header message={message} />
        <HomeOptions />
      </Layout>
    </div>
  );
};

export default Home;
