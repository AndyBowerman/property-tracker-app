import { useState } from "react";
import "./AddPropertyForm.scss";

const AddPropertyForm = ({ getNewProperty }) => {
  const [property, setProperty] = useState({
    title: "",
    bedrooms: 0,
    bathrooms: 0,
    description: "",
    mainImg: "",
    supportImg: [],
    propertyType: "",
    value: 0,
    listingType: "sale",
  });

  const submitNewProperty = (e) => {
    e.preventDefault();
    getNewProperty(property);
  };

  return (
    <div className="add-property-form">
      <form onSubmit={submitNewProperty} className="add-property-form__form">
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
        <input
          className="add-property-form__text"
          type="text"
          placeholder="Main Picture"
          name="mainImg"
          onChange={(e) =>
            setProperty({ ...property, mainImg: e.target.value })
          }
          required
        />
        <input
          className="add-property-form__text"
          type="text"
          placeholder="Secondary Pictures"
          name="supportImg"
          onChange={(e) =>
            setProperty({ ...property, supportImg: [e.target.value] })
          }
        />
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

          <button className="add-property-form__submit" type="submit">
            Create Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPropertyForm;
