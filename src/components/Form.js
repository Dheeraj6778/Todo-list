export default function Form(props) {
  let setItem = props.setItem;
  let setTodo = props.setTodo;
  let todo = props.todo;
  function handleOnChange(event) {
    console.log(event.target.value);
    setItem(event.target.value);
  }
  function handleOnSubmit(event) {
    event.preventDefault();
    let id = Math.floor(Math.random() * 100);
    setTodo([...todo, { id: id, title: props.item, completed: false }]);
    //console.log(todo);
    setItem("");
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="enter an item"
        onChange={handleOnChange}
      ></input>
      <button className="btn btn-primary" type="submit">
        Add Item
      </button>
    </form>
  );
}
