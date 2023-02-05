import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import UserInput from "../../containers/UserInput/UserInput";
import data from "../../data/data.json";

const CreateUser = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => doc._document.data.value.mapValue.fields));
  };

  useEffect(() => {
    getUsers();
    console.log(data.sold);
  }, []);

  const inputValidation = (e) => {
    e.preventDefault();
    setSuccessMessage(false);
    const filteredUsers = users.filter(
      (user) => user.userName.stringValue === e.target.userName.value
    );
    if (filteredUsers.length > 0) {
      setMessage("This username is already in use");
    } else if (
      !/\d/g.test(e.target.password.value) ||
      e.target.password.value.length < 6
    ) {
      setMessage("Your password didn't meet the criteria");
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
      forSale: data.forSale,
      forRent: data.forRent,
      sold: data.sold,
    });
    setMessage("User created, return to the login page");
    setSuccessMessage(true);
    e.target.firstName.value = "";
    e.target.lastName.value = "";
    e.target.userName.value = "";
    e.target.password.value = "";
    e.target.password2.value = "";
  };

  return (
    <UserInput
      createUser={inputValidation}
      message={message}
      successMessage={successMessage}
    />
  );
};

export default CreateUser;
