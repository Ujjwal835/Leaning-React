import { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
export default function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleeNameChange = (event) => {
    setTodoName(event.target.value)
  }
  const handleDateChange = (event) => {
    setDueDate(event.target.value)
  }
  const handleOnButtonClick = (event) => {
    // console.log(event)
    event.preventDefault();
    onNewItem(todoName, dueDate)
    setDueDate('')
    setTodoName('')
  }


  return (
    <div className="container">
      <form onSubmit={handleOnButtonClick} className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleeNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
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
