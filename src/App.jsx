// import { useState } from 'react'

import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import axios from "axios";


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

  return (
    <div className="App">
      <h1>Todos</h1>
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
