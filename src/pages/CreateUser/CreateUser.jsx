import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import CreateUserInput from "../../components/CreateUserInput/CreateUserInput";
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader";

const CreateUser = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => doc._document.data.value.mapValue.fields));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const inputValidation = (e) => {
    e.preventDefault();
    const filteredUsers = users.filter(
      (user) => user.userName.stringValue === e.target.userName.value
    );
    if (filteredUsers.length > 0) {
      setMessage("This username is already in use");
    } else if (e.target.password.value !== e.target.password2.value) {
      setMessage("Your password didn't match");
    } else {
      createUser(e);
    }
  };

  const createUser = async (e) => {
    await addDoc(usersCollectionRef, {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      password: e.target.password.value,
      userName: e.target.userName.value,
      forSale : [],
      forRent: [],
      sold: [],
      unsold: []
    });
    setMessage("User created, return to the login page");
    e.target.firstName.value = "";
    e.target.lastName.value = "";
    e.target.userName.value = "";
    e.target.password.value = "";
    e.target.password2.value = "";
  };

  return (
    <div>
      <WelcomeHeader text="Create New User" />
      <CreateUserInput createUser={inputValidation} message={message} />
    </div>
  );
};

export default CreateUser;
