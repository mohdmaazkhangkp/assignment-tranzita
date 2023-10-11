

const Todo = ({ title, index, id }) => {
  return (
    <div className="todo">
      <div className="todo_content">
        <span>{index}. </span>
        <span>{title}</span>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Todo;