import { useState } from "react";

export default function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleeNameChange = (event) => {
    setTodoName(event.target.value)
  }
  const handleDateChange = (event) => {
    setDueDate(event.target.value)
  }
  const handleOnButtonClick = () => {
    onNewItem(todoName, dueDate)
    setDueDate('')
    setTodoName('')
  }


  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleeNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleOnButtonClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
