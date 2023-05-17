'use client'

import React, { useState } from "react";
import Todo from "./Todo";
import { createTodo, deleteTodo, getTodos } from "@/app/models/models";


type Todo = {
  id: number;
  title: string;
  description: string;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [formData, setFormData] = useState({ title: "", description: "", id:""});

  console.log(todos)


  React.useEffect(() => {
    getTodos().then((data: Todo[]) => setTodos(data));
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTodos((prevTodos) => [...prevTodos, formData]);
    createTodo(formData)
    getTodos().then((data: Todo[]) => setTodos(data));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    deleteTodo(id)
  };

  

  return (
    <>
      <h3 onClick={() => getTodos()}>Todos</h3>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
      ))}
    </>
  );
};

export default Todos;
