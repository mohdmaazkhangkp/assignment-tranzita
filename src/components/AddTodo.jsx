import React from "react";

const AddTodo = ({ handleAddTodo }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(event.target.title.value);
    event.target.title.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add Todo</h3>
      <input placeholder="Title" name="title" />
      <button className="btn create_btn" type="submit">
        Add
      </button>
      <hr />
    </form>
  );
};

export default AddTodo;
