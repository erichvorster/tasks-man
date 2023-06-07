import React, { useContext, useState, useCallback } from "react";
import {
  TrashIcon,
  EllipsisHorizontalIcon,
  CalendarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import ProjectContext from "@/context/ProjectContext";
import { deleteTodo } from "@/app/models/models";
import { formatDate, getPriorityClass } from "@/components/Helpers";

interface TodoProps {
  todo: any;
  handleDeleteTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, handleDeleteTodo, params }) => {
  const [dropDown, setDropDown] = useState(false);
  const { projects, setProjects } = useContext(ProjectContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFullDescription, setShowFullDescription] = useState(false);

  const project = projects.find((project) => project.id === params.projectid);
  const todosArray = project?.todos || [];

  const updateTodoCategory = (projectId, todoId, newCategory) => {
    const updatedState = projects.map((project) => {
      if (project.id === projectId) {
        const updatedTodos = project.todos.map((todo) => {
          if (todo.id === todoId) {
            return { ...todo, category: newCategory };
          }
          return todo;
        });

        return { ...project, todos: updatedTodos };
      }

      return project;
    });

    setProjects(updatedState);
  };

  const handleUpdateCategory = (projectId, todoId, newCategory) => {
    updateTodoCategory(projectId, todoId, newCategory);
  };

  const deleteTodo = (projectId, todoId) => {
    const updatedState = projects.map((project) => {
      if (project.id === projectId) {
        const updatedTodos = project.todos.filter((todo) => todo.id !== todoId);

        return { ...project, todos: updatedTodos };
      }

      return project;
    });

    setProjects(updatedState);
  };

  const toggleDescription = useCallback(() => {
    setShowFullDescription((prev) => !prev);
  }, []);

  return (
    <div className="bg-gray-100/75 rounded-md shadow-sm p-4 w-11/12 mx-auto my-4 border dark:border-neutral-500 hover:shadow-md hover:bg-white dark:bg-neutral-700 transition-colors 0.5s ease-in-out">
      <div className="relative">
        <div
          className="flex justify-between"
          onClick={() => setDropDown(!dropDown)}
        >
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-black/75 dark:text-neutral-300">{todo.text}</h2>
          </div>
          <EllipsisHorizontalIcon
            className={`h-8 w-8 cursor-pointer text-gray-400 dark:text-neutral-300 ${
              dropDown && "text-black dark:text-neutral-300"
            }`}
          />
        </div>
        <div
          className={`absolute right-0 t-0 rounded-md border dark:border-neutral-500 shadow-md w-44 ${
            dropDown ? "block" : "hidden"
          } bg-white dark:bg-neutral-800`}
        >
          <ul>
            <li className="hover:bg-gray-100 dark:hover:bg-neutral-600 py-1 transition ease-in-out">
              <span className="pl-2 text-black/75 dark:text-neutral-300">Move</span>
              <ul className="">
                <li
                  className="hover:bg-gray-200 dark:hover:bg-neutral-500 cursor-pointer px-4 py-1 transition ease-in-out text-black/75 dark:text-neutral-300"
                  onClick={() =>
                    handleUpdateCategory(params.projectid, todo.id, "todo")
                  }
                >
                  Todo
                </li>
                <li
                  className="hover:bg-gray-200 dark:hover:bg-neutral-500 cursor-pointer px-4 py-1 transition ease-in-out text-black/75 dark:text-neutral-300"
                  onClick={() =>
                    handleUpdateCategory(
                      params.projectid,
                      todo.id,
                      "inProgress"
                    )
                  }
                >
                  In Progress
                </li>
                <li
                  className="hover:bg-gray-200 dark:hover:bg-neutral-500 cursor-pointer px-4 py-1 transition ease-in-out text-black/75 dark:text-neutral-300"
                  onClick={() =>
                    handleUpdateCategory(params.projectid, todo.id, "done")
                  }
                >
                  Done
                </li>
              </ul>
            </li>
            <hr  className="dark:bg-neutral-500"/>
            <li
              onClick={() => deleteTodo(params.projectid, todo.id)}
              className="hover:bg-gray-100 dark:hover:bg-neutral-500 hover:text-red-500 hover:font-bold cursor-pointer py-1 transition ease-in-out flex justify-between text-black/75 dark:text-neutral-300"
            >
              <span className="pl-2">Delete</span>
              <TrashIcon className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm cursor-pointer" onClick={toggleDescription}>
          {showFullDescription ? (
            todo.description
          ) : (
            <>
              {todo.description.slice(0, 150)}
              {todo.description.length > 150 && <span>...</span>}
            </>
          )}
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <div className="flex">
          <CalendarIcon className="w-5 h-5 mr-1 text-gray-400 dark:text-neutral-300" />
          <h1 className="text-xs text-gray-400 dark:text-neutral-300 mt-1">{todo.dueDate}</h1>
        </div>
        <div className="flex items-center">
          <p className="flex text-xs items-center mr-3 bg-gray-200 dark:bg-neutral-500 p-1 rounded-md">
            <UserIcon className="h-4 w-4 mr-1 text-black/75 dark:text-neutral-300" />
            {todo.assignee ? todo.assignee : "Unassigned"}
          </p>
          <p
            className={`text-xs p-1 rounded-md ${getPriorityClass(
              todo.priority
            )} `}
          >
            {todo.priority}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
