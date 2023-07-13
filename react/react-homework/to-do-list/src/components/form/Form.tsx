import React, {useState} from "react";
import "./Form.css";

const Form = ({onAddItems}) => {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description,
      completed: false,
      id: Date.now(),
    };
    // we call the below passed function(as prop) whenever the form is submitted
    onAddItems(newItem);
    setDescription("");
  }
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h3>What is your To Do item?</h3>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        // whenever we type something, the change event is fired off. We react to this change with onChange event handler
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default Form;
