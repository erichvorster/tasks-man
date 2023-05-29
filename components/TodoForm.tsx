import React, { useContext, useState } from 'react';
import ProjectContext from '@/context/ProjectContext';

const TodoForm = () => {
  const { projects, setProjects, activeProject, setActiveProject } = useContext(ProjectContext);
  const [todoInput, setTodoInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('todo');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [dueDate, setDueDate] = useState('');

  const generateRandomId = () => {
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 10000).toString();
    return timestamp + randomNum;
  };

  const addTodo = (projectId, newTodo) => {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        const updatedTodos = [...project.todos, newTodo];
        return { ...project, todos: updatedTodos };
      }
      return project;
    });

    setProjects(updatedProjects);
    setActiveProject(prevActiveProject => {
      if (prevActiveProject.id === projectId) {
        const updatedTodos = [...prevActiveProject.todos, newTodo];
        return { ...prevActiveProject, todos: updatedTodos };
      }
      return prevActiveProject;
    });
  };

  const handleTodoInputChange = event => {
    setTodoInput(event.target.value);
  };

  const handleCategoryInputChange = event => {
    setCategoryInput(event.target.value);
  };

  const handleDescriptionInputChange = event => {
    setDescriptionInput(event.target.value);
  };

  const handleDueDateChange = event => {
    setDueDate(event.target.value);
  };

  const handleAddTodo = (event, projectId) => {
    event.preventDefault();

    if (todoInput.trim() === '' || descriptionInput.trim() === '') {
      return; // Ignore empty todo or description input
    }

    const newTodo = {
      id: generateRandomId(),
      text: todoInput,
      category: categoryInput,
      description: descriptionInput,
      dueDate: dueDate,
    };
    addTodo(projectId, newTodo);
    setTodoInput('');
    setCategoryInput('todo');
    setDescriptionInput('');
    setDueDate('');
  };

  return (
    <div>
      {/* Render your component */}
      {/* ... */}
      <form onSubmit={event => handleAddTodo(event, activeProject.id)}>
        <input
          type="text"
          value={todoInput}
          onChange={handleTodoInputChange}
          placeholder="Enter todo..."
        />
        <select value={categoryInput} onChange={handleCategoryInputChange}>
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <textarea
          value={descriptionInput}
          onChange={handleDescriptionInputChange}
          placeholder="Enter description..."
        ></textarea>
        <input
          type="date"
          value={dueDate}
          onChange={handleDueDateChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
