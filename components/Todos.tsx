"use client";

import React from "react";
import Todo from "./Todo";
import { getTodos } from "@/app/models/models";
import { createTodo } from "@/app/models/models";

const Todos = () => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  return (
    <>
      <h3 onClick={() => getTodos()}>Todos</h3>
      <form action={createTodo}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </>
  );
};

export default Todos;
