import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import Layout from "../../components/Layout/Layout";
import LoginInput from "../../components/LoginInput/LoginInput";
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader";

const Login = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => doc._document.data.value.mapValue.fields));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const login = (e) => {
    e.preventDefault();
    const filteredUsers = users.filter(
      (user) => user.userName.stringValue === e.target.userName.value
    );
    if (filteredUsers.length > 0) {
      if (filteredUsers[0].password.stringValue === e.target.password.value) {
        return console.log("Success");
      } else {
        return console.log("Password incorrect");
      }
    } else {
      console.log("Username not recognised");
    }
  };

  return (
    <div>
      <Layout>
        <WelcomeHeader text={"Login Below"} />
        <LoginInput login={login} />
      </Layout>
    </div>
  );
};

export default Login;
