'use server'

import prisma from '../../lib/prisma';

const createTodo = async () => {
   
    const newTodo = await prisma.todo.create({
      data: {
        title: 'My first todo',
        description: 'This is my first todo',
      },
    });
    console.log(newTodo);
  };

  const getTodos = async () => {
    const todos = await prisma.todo.findMany();
    return todos
  };



  export { createTodo, getTodos};