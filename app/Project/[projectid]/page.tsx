"use client";

import React, { useContext, useState } from "react";
import Todos from "../../../components/Todos";
import ProjectContext from "@/context/ProjectContext";
import { formatDate, getPriorityClass } from "@/components/Helpers";
import { Overlay } from "@/components/Overlay";
import { Modal } from "@/components/Modal";
import Todo from "@/components/Todo";
import { createTodo, deleteTodo } from "@/app/models/models";
import {
  PlusIcon,
  StopIcon,
  ExclamationCircleIcon,
  CalendarIcon,
  TagIcon,
  TrashIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

const Project = ({ params }) => {
  const { projects } = useContext(ProjectContext);
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

  const getTasksInTodo = () => {
    let count = 0;
    project.todos?.map((todo) => {
      if (todo.category === "todo") {
        count++;
      }
    });
    return count;
  };

  const getTasksInProgress = () => {
    let count = 0;

    project.todos?.map((todo) => {
      if (todo.category === "inProgress") {
        count++;
      }
    });
    return count;
  };

  const getTasksCompleted = () => {
    let count = 0;

    project.todos?.map((todo) => {
      if (todo.category === "done") {
        count++;
      }
    });
    return count;
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 bg-white  rounded-md shadow-sm border pl-5 pr-5">
          <div className="grid grid-cols-12">
            <div className="col-span-9">
              <div className="flex items-center">
                <h1 className="text-3xl font-bold text-black/75 mr-8 flex items-center">
                  <StopIcon
                    className="h-9 w-9 "
                    style={{ color: project.projectColor }}
                  />{" "}
                  {project.name}
                </h1>
                <div className="mt-6 flex ">
                  <p className={`mb-4 text-sm text-black/75 mr-5`}>
                    <span
                      className={`${getPriorityClass(
                        project.priority
                      )} p-1 rounded text-black/75 flex items-center`}
                    >
                      <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                      {project.priority === ""
                        ? "No Priority"
                        : project.priority}
                    </span>
                  </p>
                  <p className="mb-4 text-black/75 text-sm mr-5 flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-1" /> {project.deadline}
                  </p>
                  <p className="mb-4 text-black/75 text-sm mr-5 flex items-center">
                    <TagIcon className="h-5 w-5 mr-1" />
                    {project.tags}
                  </p>
                </div>
              </div>
              <p className="text-sm max-w-3xl text-black/75 mr-5">
                {project.projectDescription}
              </p>
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-4 mt-8 mb-4">
              <button className="rounded-md shadow-sm border col-span-1 hover:bg-red-500/25 hover:shadow-md transition-all ease-in-out flex justify-center items-center"><TrashIcon className="h-10 w-10 text-black/25"/></button>
              <button className="rounded-md shadow-sm border col-span-1 hover:bg-green-500/25 hover:shadow-md transition-all ease-in-out flex justify-center items-center"><CheckBadgeIcon className="h-10 w-10 text-black/25"/></button>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-3 gap-2 mt-8">
          <div className="border rounded-md p-4 shadow-sm bg-white text-black/75">
            <p>Tasks not started</p>
            <p className="text-3xl font-bold mt-2">{getTasksInTodo()}</p>
          </div>
          <div className="border rounded-md p-4 shadow-sm bg-white text-black/75">
            <p>Tasks in progress</p>
            <p className="text-3xl font-bold mt-2">{getTasksInProgress()}</p>
          </div>
          <div className="border rounded-md p-4 shadow-sm bg-white text-black/75">
            <p>Tasks completed</p>
            <p className="text-3xl font-bold mt-2">{getTasksCompleted()}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6">
          {show && (
            <Overlay>
              <Modal hideOverlay={hideModal} params={params} />
            </Overlay>
          )}
          <div>
            <div className="grid grid-cols-3 bg-white border shadow-sm rounded-md overflow-auto max-h-[750px]">
              <div className="flex-col">
                <div className="text-center mt-4">
                  <h3 className="font-bold text-black/75">To Do</h3>
                  <button
                    onClick={showModal}
                    className="px-4 py-2 border rounded-md shadow-sm w-11/12 mt-2 bg-white hover:bg-gray-300/25 hover:shadow-md transition-all ease-in-out"
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
                  <h3 className="font-bold text-black/75 ">In Progress</h3>
                  <button
                    onClick={showModal}
                    className="px-4 py-2 border rounded-md shadow-sm w-11/12 mt-2 bg-white hover:bg-gray-300/25 hover:shadow-md transition-all ease-in-out"
                  >
                    <PlusIcon className="h-4 w-4 mx-auto bg-white " />
                  </button>
                </div>
                {project.todos.length !== 0 ? (
                  <div>
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
                ) : (
                  <div className="text-center mt-4">
                    <p className="text-black/75 text-sm mt-44">
                      This project does not have any active tasks
                    </p>
                  </div>
                )}
              </div>
              <div className="flex-col">
                <div className="text-center mt-4">
                  <h3 className="font-bold text-black/75">Done</h3>
                  <button
                    onClick={showModal}
                    className="px-4 py-2 border rounded-md shadow-sm w-11/12 mt-2 bg-white hover:bg-gray-300/25 hover:shadow-md transition-all ease-in-out"
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
        <div className="absolute bg-black h-44 left-0 -bottom-6 right-0 rounded-bl-md rounded-br-md bg-gradient-to-t from-gray-100 to bg-transparent"></div>
      </div>
    </div>
  );
};

export default Project;
