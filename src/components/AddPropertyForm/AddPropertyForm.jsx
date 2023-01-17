import { useState } from "react";

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
    <form onSubmit={submitNewProperty}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={(e) => setProperty({ ...property, title: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Bedrooms"
        name="bedrooms"
        onChange={(e) => setProperty({ ...property, bedrooms: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Bathrooms"
        name="bathrooms"
        onChange={(e) =>
          setProperty({ ...property, bathrooms: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        onChange={(e) =>
          setProperty({ ...property, description: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Main Picture"
        name="mainImg"
        onChange={(e) => setProperty({ ...property, mainImg: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Secondary Pictures"
        name="supportImg"
        onChange={(e) =>
          setProperty({ ...property, supportImg: [e.target.value] })
        }
      />
      <input
        type="text"
        placeholder="Property Type"
        name="propertyType"
        onChange={(e) =>
          setProperty({ ...property, propertyType: e.target.value })
        }
        required
      />
      <input
        type="number"
        placeholder="Value"
        name="value"
        onChange={(e) => setProperty({ ...property, value: e.target.value })}
        required
      />
        <label htmlFor="listingType">
            Listing Type:
            <select name="listingType" onChange={(e) => setProperty({ ...property, listingType: e.target.value })}>
                <option value="sale">Sale</option>
                <option value="rental">Rental</option>
            </select>
        </label>
      <button type="submit">Create Property</button>
    </form>
  );
};

export default AddPropertyForm;
