import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import CreateUserInput from "../../components/CreateUserInput/CreateUserInput";
import "./CreateUser.scss";
import home from "../../assets/home.svg";

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
  }, []);

  const inputValidation = (e) => {
    e.preventDefault();
    const filteredUsers = users.filter(
      (user) => user.userName.stringValue === e.target.userName.value
    );
    if (filteredUsers.length > 0) {
      setMessage("This username is already in use");
      setSuccessMessage(false);
    } else if (e.target.password.value !== e.target.password2.value) {
      setMessage("Your password didn't match");
      setSuccessMessage(false);
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
      forSale: [
        {
          bathrooms: 4,
          bedrooms: 8,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veniam ea nulla. Tempora delectus dolores maxime praesentium natus, perferendis quia facilis in id fugiat magni, tenetur doloribus. Consequatur, quidem officiis!",
          listingType: "sale",
          mainImg:
            "https://i2-prod.bristolpost.co.uk/incoming/article2178425.ece/ALTERNATES/s1200b/0_Exterior-Two.jpg",
          propertyType: "Detached House",
          title: "8 Bedroom House",
          value: "2600000",
        },
        {
          bathrooms: 2,
          bedrooms: 3,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veniam ea nulla. Tempora delectus dolores maxime praesentium natus, perferendis quia facilis in id fugiat magni, tenetur doloribus. Consequatur, quidem officiis!",
          listingType: "sale",
          mainImg:
            "https://media.rightmove.co.uk/dir/crop/10:9-16:9/24k/23297/130353608/23297_11318231_IMG_00_0000_max_476x317.jpeg",
          propertyType: "Semi-Detached House",
          title: "3 Bedroom House",
          value: "575000",
        },
        {
          bathrooms: 2,
          bedrooms: 2,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veniam ea nulla. Tempora delectus dolores maxime praesentium natus, perferendis quia facilis in id fugiat magni, tenetur doloribus. Consequatur, quidem officiis!",
          listingType: "sale",
          mainImg:
            "https://cdn2-property.estateapps.co.uk/files/property/117/image/11712286/8_final.jpg",
          propertyType: "Apartment",
          title: "2 Bedroom Apartment",
          value: "395000",
        },
      ],
      forRent: [
        {
          bathrooms: 3,
          bedrooms: 5,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veniam ea nulla. Tempora delectus dolores maxime praesentium natus, perferendis quia facilis in id fugiat magni, tenetur doloribus. Consequatur, quidem officiis!",
          listingType: "rental",
          mainImg:
            "https://static.standard.co.uk/2022/08/02/15/CatherinePlace_Exterior_DEXTERS.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
          propertyType: "Townhouse",
          title: "5 Bedroom Townhouse",
          value: "4000",
        },
        {
          bathrooms: 1,
          bedrooms: 3,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veniam ea nulla. Tempora delectus dolores maxime praesentium natus, perferendis quia facilis in id fugiat magni, tenetur doloribus. Consequatur, quidem officiis!",
          listingType: "rental",
          mainImg:
            "https://www.audleyvillages.co.uk/sites/default/files/2022-11/nightingale-penthouse-living-dining-area.jpg",
          propertyType: "Apartment",
          title: "3 Bedroom House",
          value: "1800",
        },
        {
          bathrooms: 2,
          bedrooms: 2,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veniam ea nulla. Tempora delectus dolores maxime praesentium natus, perferendis quia facilis in id fugiat magni, tenetur doloribus. Consequatur, quidem officiis!",
          listingType: "rental",
          mainImg:
            "https://www.homeviews.com/wp-content/uploads/2021/10/What-does-terraced-house-mean-1980x1137.jpg?x75925",
          propertyType: "Terraced House",
          title: "2 Bedroom House",
          value: "1500",
        },
      ],
      sold: [
        {
          bathrooms: 2,
          bedrooms: 4,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veniam ea nulla. Tempora delectus dolores maxime praesentium natus, perferendis quia facilis in id fugiat magni, tenetur doloribus. Consequatur, quidem officiis!",
          listingType: "sale",
          mainImg:
            "https://cdn2-property.estateapps.co.uk/files/property/42/image/18257181/O-hKi-2XxEyTMeB4TrmChw.jpg",
          propertyType: "Semi-Detached House",
          title: "4 Bedroom House",
          value: "575000",
        },
        {
          bathrooms: 2,
          bedrooms: 3,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veniam ea nulla. Tempora delectus dolores maxime praesentium natus, perferendis quia facilis in id fugiat magni, tenetur doloribus. Consequatur, quidem officiis!",
          listingType: "rental",
          mainImg:
            "https://res.cloudinary.com/essential-living/image/upload/ar_1.7772511848341233,c_fill,g_auto,w_1920/f_auto/q_auto/v1/Developments/Union%20Wharf/Apartments/3%20Bed/union-wharf-3-bed-wh03_12?_a=ATO2BAA0",
          propertyType: "Apartment",
          title: "3 Bedroom Apartment",
          value: "2100",
        },
        {
          bathrooms: 1,
          bedrooms: 1,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore veniam ea nulla. Tempora delectus dolores maxime praesentium natus, perferendis quia facilis in id fugiat magni, tenetur doloribus. Consequatur, quidem officiis!",
          listingType: "sale",
          mainImg:
            "https://st.hzcdn.com/simgs/8c31444d097840b9_14-8407/_.jpg",
          propertyType: "Flat",
          title: "1 Bedroom Flat",
          value: "210000",
        },
      ],
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
    <div className="create-user">
      <div className="create-user__container--left">
        <img src={home} alt="Property search" className="create-user__img" />
        <h1 className="create-user__title">Welcome To Property Tracker</h1>
      </div>
      <div className="create-user__container--right">
        <CreateUserInput createUser={inputValidation} message={message} successMessage={successMessage} />
      </div>
    </div>
  );
};

export default CreateUser;
