import React from "react";

interface TodoProps {
  title: string;
  description: string;
  todo: any;
}

const Todo: React.FC<TodoProps> = ({ title, description, todo }) => {
  console.log(todo);
  return (
    <div className="bg-slate-200 rounded p-6">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Todo;
