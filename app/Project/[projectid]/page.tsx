"use client";

import React, { useContext, useState } from "react";
import Todos from "../../../components/Todos";
import ProjectContext from "@/context/ProjectContext";
import { formatDate, getPriorityClass } from "@/components/Helpers";
import { Overlay } from "@/components/Overlay";
import { Modal } from "@/components/Modal";
import Todo from "@/components/Todo";
import { createTodo, deleteTodo, getTodos } from "@/app/models/models";
import { PlusIcon } from "@heroicons/react/24/outline";

const Project = ({params}) => {
  const { activeProject, projects } = useContext(ProjectContext);
  const [show, setShow] = useState<boolean>(false);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };



// Find the corresponding project using the projectid from params
const project = projects.find((project) => project.id === params.projectid);

if (!project) {
  // Handle the case when the project is not found
  return <div>Project not found.</div>;
}

return (
  <div>
    <div>
      <h1 className="text-4xl font-bold">{project.name}</h1>
      <div className="mt-6">
        <p className={`mb-4 `}>
          Priority:{" "}
          <span
            className={`${getPriorityClass(project.priority)} p-1 rounded`}
          >
            {project.priority === "" ? "No Priority" : project.priority}
          </span>
        </p>
        <p className="mb-4">Deadline: {project.deadline}</p>
        <p>{project.tags}</p>
      </div>
    </div>
    <div>
      <div className="mt-6">
        {show && (
          <Overlay>
            <Modal hideOverlay={hideModal} />
          </Overlay>
        )}
        <div>
          <div className="grid grid-cols-3 bg-slate-100 rounded-lg">
            <div className="flex-col">
              <div className="text-center mt-4">
                <h3 className="font-bold">To Do</h3>
                <button
                  onClick={showModal}
                  className="px-4 py-2 border-2 rounded-lg w-11/12 mt-2 bg-white"
                >
                  <PlusIcon className="h-4 w-4 mx-auto bg-white" />
                </button>
              </div>
              {project.todos?.map((todo) =>
                todo.category === "todo" ? (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    title={todo.text}
                    desc={todo.description}
                    params={params}
                  />
                ) : null
              )}
            </div>
            <div className="flex-col">
              <div className="text-center mt-4">
                <h3 className="font-bold">In Progress</h3>
                <button
                  onClick={showModal}
                  className="px-4 py-2 border-2 rounded-lg w-11/12 mt-2 bg-white"
                >
                  <PlusIcon className="h-4 w-4 mx-auto bg-white" />
                </button>
              </div>
              {project.todos?.map((todo) =>
                todo.category === "inProgress" ? (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    title={todo.text}
                    desc={todo.description}
                    params={params}
                  />
                ) : null
              )}
            </div>
            <div className="flex-col">
              <div className="text-center mt-4">
                <h3 className="font-bold">Done</h3>
                <button
                  onClick={showModal}
                  className="px-4 py-2 border-2 rounded-lg w-11/12 mt-2 bg-white"
                >
                  <PlusIcon className="h-4 w-4 mx-auto bg-white" />
                </button>
              </div>
              {project.todos?.map((todo) =>
                todo.category === "done" ? (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    title={todo.text}
                    desc={todo.description}
                    params={params}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Project;
