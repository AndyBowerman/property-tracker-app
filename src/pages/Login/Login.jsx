import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import LoginInput from "../../components/LoginInput/LoginInput";
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs)
  };

  useEffect(() => {
    getUsers();
  }, []);

  const login = (e) => {
    e.preventDefault();
    const filteredUsers = users
    .filter(
      (user) => user._document.data.value.mapValue.fields.userName.stringValue === e.target.userName.value
    );
    if (filteredUsers.length > 0) {
      if (filteredUsers[0]._document.data.value.mapValue.fields.password.stringValue === e.target.password.value) {
        setMessage("Success");
        window.localStorage.setItem("PROPERTY_TRACKER_USER_REF", JSON.stringify(filteredUsers[0]._key.path.segments[6]));
        navigate("/home");
      } else {
        setMessage("Password incorrect");
      }
    } else {
      setMessage("Username not recognised");
    }
  };

  return (
    <div>
      <WelcomeHeader text={"Login Below"} />
      <LoginInput login={login} message={message} />
    </div>
  );
};

export default Login;
