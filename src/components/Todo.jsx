import { useState } from "react";

const Todo = ({ title, index, id, handleEditTodo, handleDeleteTodo }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleOnEditSubmit = (event) => {
    event.preventDefault();
    handleEditTodo(id, event.target.title.value);
    setIsEdit((isEdit) => !isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Title" name="title" defaultValue={title} />
          <button className="create_btn" type="submit">Save</button>
        </form>
      ) : (
        <div className="todo">
          <div className="todo_content">
            <span>{index}. </span>
            <span>{title}</span>
          </div>
          <div>
            <button className="edit_btn" onClick={() => setIsEdit((isEdit) => !isEdit)}>Edit</button>
            <button className="delete_btn" onClick={()=> handleDeleteTodo(id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
