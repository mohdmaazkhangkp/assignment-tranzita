// import { useState } from 'react'

import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import axios from "axios";
import AddTodo from "./components/AddTodo";


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=20");
        const data = response.data;
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, [])

  const handleAddTodo = async (title) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: title
      }, {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
  
      if (response.status !== 201) {
        return;
      }
  
      const data = response.data;
  console.log(response)
      setTodos((todos) => [...todos, data]);
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
          index={index+1}
          id={todo.id}
          key={todo.id}
          title={todo.title}
        />
      ))}
    </div>
  );
}

export default App
