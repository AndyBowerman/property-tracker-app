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
  const [time, setTime] = useState("0");
  const [message, setMessage] = useState("Good Morning");
  const [icon, setIcon] = useState(morning);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const usersCollectionRef = collection(db, "users");

  const getUser = async () => {
    const data = await getDocs(usersCollectionRef);
    const ref = window.localStorage.getItem("PROPERTY_TRACKER_USER_REF");
    const currentUser = data.docs.filter(user => user._key.path.segments[6] === JSON.parse(ref))
    setUser(currentUser[0]);
    setIsLoading(false);
  };

  const getTime = () => {
    const today = new Date();
    setTime(today.getHours());
  };

  const declareMessage = () => {
    if (time >= 0 && time < 4) {
      setMessage(
        "Good Night " + user._document.data.value.mapValue.fields.firstName.stringValue
      );
      setIcon(night);
    } else if (time >= 4 && time < 12) {
      setMessage(
        Object.keys(user).length
          ? "Good Morning " + user.firstName.stringValue
          : "Good Morning"
      );
      setIcon(morning);
    } else if (time >= 12 && time < 17) {
      setMessage(
        Object.keys(user).length
          ? "Good Afternoon " + user.firstName.stringValue
          : "Good Afternoon"
      );
      setIcon(afternoon);
    } else if (time >= 17 && time <= 23) {
      setMessage(
        Object.keys(user).length
          ? "Good Evening " + user.firstName.stringValue
          : "Good Evening"
      );
      setIcon(evening);
    }
  };

  useEffect(() => {
    getTime();
    getUser();
  }, []);

  useEffect(() => {
    declareMessage();
  }, [isLoading])

  return (
    <div>
      <Layout>
        <img src={icon} alt="icon" className="icon" />
        {!isLoading && <Header message={message} />}
        <HomeOptions />
      </Layout>
    </div>
  );
};

export default Home;
