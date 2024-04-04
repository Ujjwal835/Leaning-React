import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomMessage from "./components/WelcomMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
// in this if the project is complex, i.e there are multiple states and props and one is dependent on other  then it may happen that newtodoitem is taking old spread item not the current one 

  // const handleNewItem = (itemName, itemDueDate) => {
  //   const newTodoItems = [
  //     ...todoItems,
  //     { name: itemName, dueDate: itemDueDate },
  //   ];
  //   setTodoItems(newTodoItems);
  // };
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue)=>{
      const newTodoItems = [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems

    });
  };
 
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todoContainer">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
