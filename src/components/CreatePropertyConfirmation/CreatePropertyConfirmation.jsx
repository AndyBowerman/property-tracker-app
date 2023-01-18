import "./CreatePropertyConfirmation.scss";

const CreatePropertyConfirmation = ({ addNewProperty, getNewProperty }) => {
  return (
    <div className="create-property-confirmation">
      <div className="create-property-confirmation__container">
        <h1 className="create-property-confirmation__title">Create listing?</h1>
        <button
          className="create-property-confirmation__accept"
          onClick={() => addNewProperty()}
        >
          Yes
        </button>
        <button
          className="create-property-confirmation__decline"
          onClick={getNewProperty}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default CreatePropertyConfirmation;
