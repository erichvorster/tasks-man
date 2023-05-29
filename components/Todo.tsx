import React, { useContext } from "react";
import { TrashIcon, EllipsisHorizontalIcon, CalendarIcon } from "@heroicons/react/24/outline";
import ProjectContext from "@/context/ProjectContext";
import { deleteTodo } from "@/app/models/models";
import { formatDate } from "@/components/Helpers";

interface TodoProps {
  todo: any;
  handleDeleteTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, handleDeleteTodo, params }) => {
  const [dropDown, setDropDown] = React.useState(false);
  const { projects, setProjects } = useContext(
    ProjectContext
  );
  const [selectedCategory, setSelectedCategory] = React.useState("");

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
        const updatedTodos = project.todos.filter(
          (todo) => todo.id !== todoId
        );

        return { ...project, todos: updatedTodos };
      }

      return project;
    });

    setProjects(updatedState);
  };

  console.log(todo)

  return (
    <div className="bg-white rounded-lg p-4 w-11/12 mx-auto my-4 border-2">
      <div className="relative">
        <div
          className="flex justify-between"
          onClick={() => setDropDown(!dropDown)}
        >
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 mr-1 text-gray-400"/><h1 className="text-xs text-gray-400 mt-1">{todo.dueDate}</h1>
          </div>
          <EllipsisHorizontalIcon
            className={`h-8 w-8 cursor-pointer text-gray-400 ${
              dropDown && "text-black"
            }`}
          />
        </div>
        <div
          className={`absolute right-0 t-0 rounded border-2 shadow-md w-44 ${
            dropDown ? "block" : "hidden"
          } bg-white`}
        >
          <ul>
            <li className="hover:bg-slate-100   py-1 transition ease-in-out">
              <span className="pl-2">Move</span>
              <ul className="">
                <li
                  className="hover:bg-slate-200 cursor-pointer px-4 py-1 transition ease-in-out"
                  onClick={() =>
                    handleUpdateCategory(
                      params.projectid,
                      todo.id,
                      "todo"
                    )
                  }
                >
                  Todo
                </li>
                <li
                  className="hover:bg-slate-200 cursor-pointer px-4 py-1 transition ease-in-out"
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
                  className="hover:bg-slate-200 cursor-pointer px-4 py-1 transition ease-in-out"
                  onClick={() =>
                    handleUpdateCategory(params.projectid, todo.id, "done")
                  }
                >
                  Done
                </li>
              </ul>
            </li>
            <hr />
            <li onClick={() => deleteTodo(params.projectid, todo.id)}className="hover:bg-slate-100 hover:text-red-500 hover:font-bold cursor-pointer py-1 transition ease-in-out flex justify-between">
              <span className="pl-2">Delete</span>
              <TrashIcon className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 p-4">
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
    </div>
  );
  
};

export default Todo;
