import React from "react";
import {TrashIcon} from "@heroicons/react/24/outline";

import { deleteTodo } from "@/app/models/models";


interface TodoProps {

  todo: any;
  handleDeleteTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, handleDeleteTodo }) => {
  

  return (
    <div className="bg-slate-200 rounded p-6">
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <TrashIcon onClick={() => handleDeleteTodo(todo.id)} className="h-12 w-12 cursor-pointer"/>
    </div>
  );
};

export default Todo;
