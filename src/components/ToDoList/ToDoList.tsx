import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { text } from "stream/consumers";
import { ToDo } from "../../modeles/todo-item";

export const ToDoList = (props: {
  todos: ToDo[];
  updateTodo: Function;
  deleteTodo: Function;
}) => {
  const todos: ToDo[] = [
    {
      id: 0,
      text: "Первая задача",
      isDone: false,
    },
    {
      id: 1,
      text: "Вторая задача",
      isDone: true,
    },
    {
      id: 2,
      text: "Третья задача",
      isDone: true,
    },
  ];

  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={index}
            updateTodo={props.updateTodo}
            deleteTodo={props.deleteTodo}
          />
        );
      });
  };
  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={index}
            updateTodo={props.updateTodo}
            deleteTodo={props.deleteTodo}
          />
        );
      });
  };
  return (
    <div className="todo-container">
      <ul className="todo-list failed">{checkedList()}</ul>
      <ul className="todo-list completed">{unCheckedList()}</ul>
    </div>
  );
};
