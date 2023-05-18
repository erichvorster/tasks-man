"use client";

import React, { useState } from "react";
import Todo from "./Todo";
import { createTodo, deleteTodo, getTodos } from "@/app/models/models";
import { PlusIcon } from "@heroicons/react/24/outline";

type Todo = {
  id: number;
  title: string;
  description: string;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    id: "",
  });

  console.log(todos);

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
    createTodo(formData);
    getTodos().then((data: Todo[]) => setTodos(data));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  return (
    <div className="mt-6">
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
      <div>
        <div className="grid grid-cols-3 bg-slate-100 rounded-lg">
          <div className="flex-col">
            <div className="text-center mt-4">
              <h3 className="font-bold">To Do</h3>
              <button className=" px-4 py-2 border-2 rounded-lg w-11/12 mt-2 bg-white">
                <PlusIcon className="h-4 w-4 mx-auto bg-white" />
              </button>
            </div>
            <div>
              {todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              ))}
            </div>
          </div>
          <div className="flex-col">
            <div className="text-center mt-4">
              <h3 className="font-bold">To Do</h3>
              <button className=" px-4 py-2 border-2 rounded-lg w-11/12 mt-2 bg-white">
                <PlusIcon className="h-4 w-4 mx-auto bg-white" />
              </button>
            </div>
            <div>
              {todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              ))}
            </div>
          </div>
          <div className="flex-col">
            <div className="text-center mt-4">
              <h3 className="font-bold">To Do</h3>
              <button className=" px-4 py-2 border-2 rounded-lg w-11/12 mt-2 bg-white">
                <PlusIcon className="h-4 w-4 mx-auto bg-white" />
              </button>
            </div>
            <div>
              {todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              ))}
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default Todos;
