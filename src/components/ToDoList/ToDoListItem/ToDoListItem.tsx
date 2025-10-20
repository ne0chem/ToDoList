import "./ToDoListItem.scss";
import { ToDo } from "../../../modeles/todo-item";

export const ToDoListItem = (props: {
  toDoItem: ToDo;
  updateTodo: Function;
  deleteTodo: Function;
}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button
          onClick={() => props.deleteTodo(props.toDoItem)}
          className="btn-trash"
        ></button>
        <button
          onClick={() => props.updateTodo(props.toDoItem)}
          className={props.toDoItem.isDone ? "btn-check" : "btn-uncheck"}
        ></button>
      </div>
    </li>
  );
};
