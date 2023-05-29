"use server";

import prisma from "../../lib/prisma";


//Create a todo
const createTodo = async (data) => {
  const newTodo = await prisma.todo.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });
};

//List all todos
const getTodos = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};

//delete a todo
const deleteTodo = async (id:number) => {
  const todo = await prisma.todo.delete({
    where: {
      id: id,
    },
  });
 
};





export { createTodo, getTodos, deleteTodo };
