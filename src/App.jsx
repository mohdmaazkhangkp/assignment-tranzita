import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import axios from "axios";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=20"
        );
        const data = response.data;
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async (title) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title: title,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response.status !== 201) {
        return;
      }

      const data = response.data;
      setTodos((todos) => [data, ...todos]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditTodo = async (id, title) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          title: title,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response.status !== 200) {
        return;
      }

      const data = response.data;

      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      });

      setTodos(updatedTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      if (response.status !== 200) {
        return;
      }

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      {todos.map((todo, index) => (
        <Todo
          index={index + 1}
          id={todo.id}
          key={todo.id}
          title={todo.title}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
