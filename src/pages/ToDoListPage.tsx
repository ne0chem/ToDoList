import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../modeles/todo-item";
import { useState } from "react";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const createNewTodo = (text: string) => {
    const newTodo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (TodoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === TodoItem.id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (TodoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== TodoItem.id);
    setTodos(newTodos);
  };
  return (
    <>
      <Header />
      <Form createNewTodo={createNewTodo} />
      <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </>
  );
};
