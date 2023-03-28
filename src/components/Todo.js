import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
export default function Todo({ todo, setTodo }) {
  const [completed, setCompleted] = useState(0);
  console.log("todo ", todo);
  let handleDelete = (id) => {
    console.log("delete");
    console.log(id);
    let temp = todo.filter((elem) => elem.id !== id);
    setTodo(temp);
    setCompleted((prev) => Math.max(0, prev - 1));
  };
  let handleUpdate = (id) => {
    console.log("update");
    let newitem = prompt("enter new item");
    console.log(newitem);
    let temp = todo;
    console.log(temp.length);
    console.log("id to be updated ", id);
    const newTodo = todo.map((elem) => {
      if (elem.id === id) {
        return { ...elem, title: newitem };
      }
      return elem;
    });
    console.log(newTodo);
    setTodo(newTodo);
  };
  let handleChange = (id) => {
    //console.log("change id", id);
    let cb = document.getElementById(id);
    if (cb.checked) {
      setCompleted((completed) => completed + 1);
    } else {
      setCompleted((completed) => completed - 1);
    }
  };
  useEffect(() => {}, [completed, todo.length]);
  return (
    <div>
      <h2>
        Completed items are {completed}/{todo.length}
      </h2>
      <ul>
        {todo.map((element) => (
          <>
            <li key={element.id}>
              <input
                key={element.id}
                value={element.title}
                onChange={(event) => event.preventDefault()}
              />

              <button
                className="btn btn-danger"
                onClick={() => handleDelete(element.id)}
              >
                delete
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleUpdate(element.id)}
              >
                update
              </button>
              <button className="btn btn-success">
                <label for={element.id}>completed</label>
              </button>
              <input
                type="checkbox"
                id={element.id}
                onChange={(event) => handleChange(element.id)}
              />
            </li>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
}
