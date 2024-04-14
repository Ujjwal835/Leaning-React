import { useState, useRef, useContext } from "react";
import { GrAddCircle } from "react-icons/gr";
import { TodoItemsContext } from "../store/todo-items-store";

export default function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext)

  // const [todoName, setTodoName] = useState('');
  // const [dueDate, setDueDate] = useState('');

  const todoNameElement = useRef();
  const dueDateElement = useRef();


  // const handleeNameChange = (event) => {
  //   setTodoName(event.target.value)
  // }
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value)
  // }
  // const handleOnButtonClick = (event) => {
  //   event.preventDefault();
  //   onNewItem(todoName, dueDate)
  //   setDueDate('')
  //   setTodoName('')
  // }
  const handleOnButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = ""
    dueDateElement.current.value = ""
    addNewItem(todoName, dueDate)
  }


  return (
    <div className="container">
      <form onSubmit={handleOnButtonClick} className="row kg-row">
        <div className="col-6">
          {/* <input type="text" ref={todoNameElement} placeholder="Enter Todo Here" value={todoName} onChange={handleeNameChange} /> */}
          <input type="text" ref={todoNameElement} placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          {/* <input type="date" ref={dueDateElement} value={dueDate} onChange={handleDateChange} /> */}
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" >
            <GrAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}
