import React, { useContext, useState } from "react";
import ProjectContext from "@/context/ProjectContext";
import { RectangleStackIcon } from "@heroicons/react/24/outline";

const TodoForm = ({hideOverlay, params}) => {
  const { projects, setProjects, activeProject, setActiveProject, } =
    useContext(ProjectContext);
  const [todoInput, setTodoInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("todo");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low"); // Added priority state

  const generateRandomId = () => {
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 10000).toString();
    return timestamp + randomNum;
  };

  const addTodo = (projectId, newTodo) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        const updatedTodos = [...project.todos, newTodo];
        return { ...project, todos: updatedTodos };
      }
      return project;
    });

    setProjects(updatedProjects);
    setActiveProject((prevActiveProject) => {
      if (prevActiveProject.id === projectId) {
        const updatedTodos = [...prevActiveProject.todos, newTodo];
        return { ...prevActiveProject, todos: updatedTodos };
      }
      return prevActiveProject;
    });
  };

  const handleTodoInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const handleCategoryInputChange = (event) => {
    setCategoryInput(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setDescriptionInput(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleAddTodo = (event, projectId) => {
    event.preventDefault();

    if (todoInput.trim() === "" || descriptionInput.trim() === "") {
      return; // Ignore empty todo or description input
    }

    const newTodo = {
      id: generateRandomId(),
      text: todoInput,
      category: categoryInput,
      description: descriptionInput,
      dueDate: dueDate,
      priority: priority, // Added priority to newTodo object
    };
    addTodo(projectId, newTodo);
    setTodoInput("");
    setCategoryInput("todo");
    setDescriptionInput("");
    setDueDate("");
    setPriority("low"); // Reset priority to "low" after adding todo
  };

  return (
    <div>
      <h1 className="text-2xl font-bold flex"><RectangleStackIcon className="h-7 w-7 mr-2"/> Create Todo</h1>

      <form onSubmit={(event) => handleAddTodo(event, activeProject.id)}>
        <div>
          <div className="flex flex-col mt-6">
            <label className="text-xs font-bold">Title</label>
            <input
              type="text"
              value={todoInput}
              onChange={handleTodoInputChange}
              placeholder="Enter todo..."
              className="border border-gray-300 rounded-md px-2 py-1 mt-1"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-xs font-bold">Description</label>
            <textarea
              value={descriptionInput}
              onChange={handleDescriptionInputChange}
              placeholder="Enter description..."
              className="h-24 border border-gray-300 rounded-md px-2 py-1 mt-1"
            ></textarea>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="flex flex-col ">
              <label className="text-xs font-bold">Priority</label>
              <select
                value={priority}
                onChange={handlePriorityChange}
                className="border border-gray-300 rounded-md px-2 py-1 mt-1"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label className="text-xs font-bold">Status</label>
              <select
                value={categoryInput}
                onChange={handleCategoryInputChange}
                className="border border-gray-300 rounded-md px-2 py-1 mt-1"
              >
                <option value="todo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label className="text-xs font-bold">Due Date</label>
              <input
                className="border border-gray-300 rounded-md px-2 py-1 mt-1"
                type="date"
                value={dueDate}
                onChange={handleDueDateChange}
              />
            </div>
          </div>
          <div className="mt-24 grid grid-cols-2 gap-4">
            <button onClick={hideOverlay} className="border rounded-md py-1">Cancel</button>
            <button type="submit" className="border rounded-md py-1 bg-blue-400 text-white">Add Todo</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
