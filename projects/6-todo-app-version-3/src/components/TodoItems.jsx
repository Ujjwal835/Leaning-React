import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

export default function TodoItems() {

    const { todoItems } = useContext(TodoItemsContext);

    // above kine is written using object destructyuring and it can be wriiten like this also -
    // const contextObj = useContext(TodoItemsContext);
    // const todoItems = contextObj.todoItems;

    return (
        <div className={styles.itemsContainer}>
            {/* since we are getting an array todoitems therfoore use map method and use curly braces because its javascript */}

            {todoItems.map((item) => (
                <TodoItem
                    key={item.name}
                    todoDate={item.dueDate}
                    todoName={item.name}
                />
            ))}
        </div>
    );
}
