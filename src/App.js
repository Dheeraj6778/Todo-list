import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
function App() {
  const [item,setItem]=useState("");
  const [todo,setTodo]=useState([]);
  return (
    <div className="App">
      <h2>Todo List</h2>
      <div>
        <Form item={item} setItem={setItem} todo={todo} setTodo={setTodo} />
      </div>
      <div>
        <Todo todo={todo} setTodo={setTodo}/>
      </div>
    </div>
  );
}

export default App;
