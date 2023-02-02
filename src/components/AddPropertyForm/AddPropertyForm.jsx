import { useState } from "react";
import "./AddPropertyForm.scss";

const AddPropertyForm = ({ getNewProperty }) => {
  const [property, setProperty] = useState({
    title: "",
    bedrooms: 0,
    bathrooms: 0,
    description: "",
    mainImg: [],
    propertyType: "",
    value: 0,
    listingType: "sale",
  });
  const [image, setImage] = useState("");

  const addImage = (e) => {
    e.preventDefault();
    setProperty({
      ...property,
      mainImg: [...property.mainImg, e.target.mainImg.value],
    });
    setImage("");
  };

  const submitNewProperty = (e) => {
    e.preventDefault();
    getNewProperty(property);
  };

  return (
    <div className="add-property-form">
      <input
        className="add-property-form__text"
        type="text"
        placeholder="Title"
        name="title"
        onChange={(e) => setProperty({ ...property, title: e.target.value })}
        required
      />
      <div className="add-property-form__container">
        <input
          className="add-property-form__text add-property-form__text--bedroom"
          type="number"
          placeholder="Bedrooms"
          name="bedrooms"
          onChange={(e) =>
            setProperty({ ...property, bedrooms: e.target.value })
          }
          required
        />
        <input
          className="add-property-form__text"
          type="number"
          placeholder="Bathrooms"
          name="bathrooms"
          onChange={(e) =>
            setProperty({ ...property, bathrooms: e.target.value })
          }
          required
        />
      </div>
      <textarea
        className="add-property-form__text"
        type="text"
        placeholder="Description"
        name="description"
        onChange={(e) =>
          setProperty({ ...property, description: e.target.value })
        }
        required
      />
      <form className="add-property-form__images" onSubmit={addImage}>
        <input
          className="add-property-form__text"
          type="text"
          placeholder="Add Images"
          name="mainImg"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="add-property-form__add" type="submit">+</button>
      </form>

      <input
        className="add-property-form__text"
        type="text"
        placeholder="Property Type"
        name="propertyType"
        onChange={(e) =>
          setProperty({ ...property, propertyType: e.target.value })
        }
        required
      />
      <input
        className="add-property-form__text"
        type="number"
        placeholder="Asking Price"
        name="value"
        onChange={(e) => setProperty({ ...property, value: e.target.value })}
        required
      />
      <div className="add-property-form__container--btn">
        <label className="add-property-form__label" htmlFor="listingType">
          Listing Type:
        </label>
        <select
          className="add-property-form__select"
          name="listingType"
          onChange={(e) =>
            setProperty({ ...property, listingType: e.target.value })
          }
        >
          <option value="sale">Sale</option>
          <option value="rental">Rental</option>
        </select>

        <button
          className="add-property-form__submit"
          onClick={submitNewProperty}
        >
          Create Property
        </button>
      </div>
    </div>
  );
};

export default AddPropertyForm;
