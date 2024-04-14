import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '04/10/2023'
    },
    {
      name: 'Goto College',
      dueDate: '05/10/2023'
    },
    {
      name: 'Like this video',
      dueDate: 'right now'
    },
    {
      name: 'work hard',
      dueDate: 'right now'
    }
  ]
  return (
    <center className="todo-container" >
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  )
}

export default App
