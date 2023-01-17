const CreatePropertyConfirmation = ({addNewProperty, getNewProperty}) => {
  return (
    <div>
      <h1>Add listing?</h1>
      <button onClick={() => addNewProperty()}>Yes</button>
      <button onClick={getNewProperty}>No</button>
    </div>
  )
}

export default CreatePropertyConfirmation
