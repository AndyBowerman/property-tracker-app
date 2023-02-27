import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./AddressLookUp.scss";

const AddressLookUp = ({ selectAddress }) => {
  const [postcode, setPostcode] = useState("");
  const [addressOptions, setAddressOptions] = useState([]);

  const cleanPostcode = (postcode) => {
    const postcodeArr = postcode
      .split("")
      .filter((char) => char.match(/[A-Za-z0-9]/));
    if (postcodeArr.length === 6) {
      postcodeArr.splice(3, 0, "%20");
      setPostcode(postcodeArr.join(""));
    } else {
      postcodeArr.splice(4, 0, "%20");
      setPostcode(postcodeArr.join(""));
    }
  };

  const getAddress = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://ws.postcoder.com/pcw/${process.env.REACT_APP_postcoderApi}/address/uk/${postcode}`
    );
    const data = await response.json();
    setAddressOptions(data);
    console.log(data);
  };

  const renderOptions = addressOptions.map((option, index) => {
    return (
      <option key={index} value={option.summaryline}>
        {option.summaryline}
      </option>
    );
  });

  const test = (e) => console.log(e.target.value);

  return (
    <form onSubmit={getAddress} className="address-look-up">
      <div className="address-look-up__container">
        <input
          className="address-look-up__postcode"
          name="search"
          type="text"
          placeholder="Enter postcode"
          onChange={(e) => cleanPostcode(e.target.value)}
        />
        <button className="address-look-up__submit" type="submit">
          <SearchIcon />
        </button>
      </div>

      <select
        className="address-look-up__select"
        name="address"
        id="address"
        onChange={(e) => {selectAddress(e.target.value, postcode)}}
      >
        <option value="" id="default-option">
          Select Address
        </option>
        {renderOptions}
      </select>
    </form>
  );
};

export default AddressLookUp;
