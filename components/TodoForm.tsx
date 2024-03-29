import React, { useContext, useState, ChangeEvent } from "react";
import ProjectContext from "@/context/ProjectContext";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import { Project } from "@/data/data";

type TodoFormProps = {
  hideOverlay: () => void;
  params: any;
};

const TodoForm = ({ hideOverlay, params }: TodoFormProps) => {
  const { projects, setProjects, activeProject, setActiveProject }: any =
    useContext(ProjectContext);
  const [todoInput, setTodoInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("todo");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [assigneeInput, setAssigneeInput] = useState(""); // Added assigneeInput state

  const generateRandomId = () => {
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 10000).toString();
    return timestamp + randomNum;
  };

  const addTodo = (projectId: string, newTodo: any) => {
    const updatedProjects = projects.map((project: Project) => {
      if (project.id === projectId) {
        const updatedTodos = [...project.todos, newTodo];
        return { ...project, todos: updatedTodos };
      }
      return project;
    });

    setProjects(updatedProjects);
    setActiveProject((prevActiveProject: any) => {
      if (prevActiveProject.id === projectId) {
        const updatedTodos = [...prevActiveProject.todos, newTodo];
        return { ...prevActiveProject, todos: updatedTodos };
      }
      return prevActiveProject;
    });
  };

  const handleTodoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const handleCategoryInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategoryInput(event.target.value);
  };

  const handleDescriptionInputChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionInput(event.target.value);
  };

  const handleDueDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDueDate(event.target.value);
  };

  const handlePriorityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPriority(event.target.value);
  };

  const handleAssigneeInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAssigneeInput(event.target.value);
  }; // Added assignee input change handler

  const handleAddTodo = (
    event: ChangeEvent<HTMLInputElement>,
    projectId: string
  ) => {
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
      priority: priority,
      assignee: assigneeInput, // Added assignee to newTodo object
    };
    addTodo(projectId, newTodo);
    setTodoInput("");
    setCategoryInput("todo");
    setDescriptionInput("");
    setDueDate("");
    setPriority("low");
    setAssigneeInput(""); // Reset assigneeInput after adding todo
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold flex">
        <RectangleStackIcon className="h-7 w-7 mr-2" /> Create Todo
      </h1>

      <form onSubmit={(event: any) => handleAddTodo(event, activeProject.id)}>
        <div>
          <div className="flex flex-col mt-6">
            <label className="text-xs font-bold">Title</label>
            <input
              type="text"
              value={todoInput}
              onChange={handleTodoInputChange}
              placeholder="Enter todo..."
              className="border border-gray-300 dark:border-neutral-500 rounded-md px-2 py-1 mt-1"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-xs font-bold">Description</label>
            <textarea
              value={descriptionInput}
              onChange={handleDescriptionInputChange}
              placeholder="Enter description..."
              className="h-24 border border-gray-300 dark:border-neutral-500 rounded-md px-2 py-1 mt-1"
            ></textarea>
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-xs font-bold">Assignee</label>
            <input
              type="text"
              value={assigneeInput}
              onChange={handleAssigneeInputChange}
              placeholder="Enter assignee..."
              className="border border-gray-300 dark:border-neutral-500 rounded-md px-2 py-1 mt-1"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="flex flex-col ">
              <label className="text-xs font-bold">Priority</label>
              <select
                value={priority}
                onChange={handlePriorityChange}
                className="border border-gray-300 dark:border-neutral-500 rounded-md px-2 py-1 mt-1"
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
                className="border border-gray-300 dark:border-neutral-500 rounded-md px-2 py-1 mt-1"
              >
                <option value="todo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label className="text-xs font-bold">Due Date</label>
              <input
                className="border border-gray-300 dark:border-neutral-500 rounded-md px-2 py-1 mt-1"
                type="date"
                value={dueDate}
                onChange={handleDueDateChange}
              />
            </div>
          </div>
          <div className="mt-24 grid grid-cols-2 gap-4">
            <button
              onClick={hideOverlay}
              className="border rounded-md dark:border-neutral-500 py-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border rounded-md py-1  dark:border-neutral-500 text-white"
            >
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
