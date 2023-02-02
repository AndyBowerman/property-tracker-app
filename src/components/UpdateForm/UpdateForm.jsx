import { useState } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./UpdateForm.scss";

const UpdateForm = ({
  property,
  close,
  getUpdatedProperty,
  commitUpdatedProperty,
  deleteImages,
}) => {
  const [image, setImage] = useState("");
  return (
    <div className="update-form">
      <button className="update-form__close" onClick={() => close(0, "")}>
        x
      </button>
      <div className="update-form__container--display">
        {property.mainImg.length > 0 ? (
          <ImageCarousel
            displayDelete={true}
            images={property.mainImg}
            deleteImages={deleteImages}
          />
        ) : (
          <h2 className="update-form__msg">
            There are currently no images to display
          </h2>
        )}
      </div>
      <div className="update-form__container--main">
        <div className="update-form__container--text">
          <label className="update-form__label" htmlFor="title">
            Title:{" "}
          </label>
          <input
            className="update-form__text"
            type="text"
            placeholder="Title"
            value={property.title}
            name="title"
            onChange={(e) => getUpdatedProperty(1, e.target.value)}
            required
          />
        </div>
        <div className="update-form__container--rooms">
          <div className="update-form__container--text">
            <label className="update-form__label" htmlFor="bedrooms">
              Bedrooms:{" "}
            </label>
            <input
              className="update-form__text update-form__text--rooms"
              type="number"
              value={property.bedrooms}
              placeholder="Bedrooms"
              name="bedrooms"
              onChange={(e) => getUpdatedProperty(2, e.target.value)}
              required
            />
          </div>
          <div className="update-form__container--text">
            <label className="update-form__label" htmlFor="bathrooms">
              Bathrooms:{" "}
            </label>
            <input
              className="update-form__text update-form__text--rooms"
              type="number"
              value={property.bathrooms}
              placeholder="Bathrooms"
              name="bathrooms"
              onChange={(e) => getUpdatedProperty(3, e.target.value)}
              required
            />
          </div>
        </div>
        <div className="update-form__container--text">
          <label className="update-form__label" htmlFor="description">
            Description:{" "}
          </label>
          <textarea
            className="update-form__text"
            type="text"
            rows="6"
            value={property.description}
            placeholder="Description"
            name="description"
            onChange={(e) => getUpdatedProperty(4, e.target.value)}
            required
          />
        </div>
        <form
          className="update-form__images"
          onSubmit={(e) => {
            e.preventDefault();
            getUpdatedProperty(7, e.target.mainImg.value);
            setImage("");
          }}
        >
          <input
            className="update-form__text"
            type="text"
            placeholder="Add Images"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            name="mainImg"
          />
          <button className="update-form__add" type="submit">
            +
          </button>
        </form>
        <div className="update-form__container--text">
          <label className="update-form__label" htmlFor="propertyType">
            Property Type:{" "}
          </label>
          <input
            className="update-form__text"
            type="text"
            value={property.propertyType}
            placeholder="Property Type"
            name="propertyType"
            onChange={(e) => getUpdatedProperty(5, e.target.value)}
            required
          />
        </div>
        <div className="update-form__container--text">
          <label className="update-form__label" htmlFor="value">
            Asking Price:{" "}
          </label>
          <input
            className="update-form__text"
            type="number"
            value={property.value}
            placeholder="Asking Price"
            name="value"
            onChange={(e) => getUpdatedProperty(6, e.target.value)}
            required
          />
        </div>
        <div className="update-form__container--btn">
          <button
            className="update-form__submit"
            onClick={commitUpdatedProperty}
          >
            Update Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
