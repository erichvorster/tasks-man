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
  CheckBadgeIcon,
  CubeTransparentIcon,
  UserIcon,
  QueueListIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";
import { Project } from "@/data/data";
import { TodoType } from "@/data/data";

const ProjectPage = ({ params }: any) => {
  const { projects } = useContext<any>(ProjectContext);
  const [show, setShow] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [filterOption, setFilterOption] = useState<string>("");

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  // Find the corresponding project using the projectid from params
  const project = projects.find(
    (project: any) => project.id === params.projectid
  );

  if (!project) {
    // Handle the case when the project is not found
    return <div>Project not found.</div>;
  }

  const getTasksInTodo = () => {
    let count = 0;
    project.todos?.map((todo: TodoType) => {
      if (todo.category === "todo") {
        count++;
      }
    });
    return count;
  };

  const getTasksInProgress = () => {
    let count = 0;

    project.todos?.map((todo: TodoType) => {
      if (todo.category === "inProgress") {
        count++;
      }
    });
    return count;
  };

  const getTasksCompleted = () => {
    let count = 0;

    project.todos?.map((todo: TodoType) => {
      if (todo.category === "done") {
        count++;
      }
    });
    return count;
  };

  const getFilteredTasksByStage = () => {
    if (filterOption === "todo") {
      return project.todos?.filter(
        (todo: TodoType) => todo.category === "todo"
      );
    } else if (filterOption === "inProgress") {
      return project.todos?.filter(
        (todo: TodoType) => todo.category === "inProgress"
      );
    } else if (filterOption === "done") {
      return project.todos?.filter(
        (todo: TodoType) => todo.category === "done"
      );
    } else {
      return project.todos;
    }
  };

  console.log("filter", getFilteredTasksByStage());

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-3 md:col-span-2 bg-white dark:bg-neutral-800 dark:border-neutral-500 rounded-md shadow-sm border pl-5 pr-5">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9">
              <div className="flex-col md:flex md:flex-row items-center">
                <h1 className="text-2xl font-bold text-black/75 dark:text-neutral-300 mr-8 flex items-center">
                  <StopIcon
                    className={`h-9 w-9 `}
                    style={{ color: project.projectColor }}
                  />{" "}
                  {project.name}
                </h1>
                <div className="mt-6 flex ">
                  <p
                    className={`mb-4 text-sm text-black/75 mr-5 dark:text-neutral-300`}
                  >
                    <span
                      className={`${getPriorityClass(
                        project.priority
                      )} p-1 rounded text-black/75 flex items-center dark:text-neutral-300 `}
                    >
                      <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                      {project.priority === ""
                        ? "No Priority"
                        : project.priority}
                    </span>
                  </p>
                  <p className="mb-4 text-black/75 text-sm mr-5 flex items-center dark:text-neutral-300">
                    <CalendarIcon className="h-5 w-5 mr-1" /> {project.deadline}
                  </p>
                  <p className="mb-4 text-black/75 text-sm mr-5 flex items-center dark:text-neutral-300">
                    <TagIcon className="h-5 w-5 mr-1" />
                    {project.tags}
                  </p>
                </div>
              </div>
              <p className="text-sm max-w-3xl text-black/75 mr-5 dark:text-neutral-300">
                {project.projectDescription}
              </p>
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-4 mt-8 mb-4">
              <button className="rounded-md shadow-sm border dark:border-neutral-500 col-span-1 hover:bg-red-500/25 hover:shadow-md transition-all ease-in-out flex justify-center items-center">
                <TrashIcon className="h-10 w-10 text-black/25 dark:text-neutral-300" />
              </button>
              <button className="rounded-md shadow-sm border dark:border-neutral-500 col-span-1 hover:bg-green-500/25 hover:shadow-md transition-all ease-in-out flex justify-center items-center">
                <CheckBadgeIcon className="h-10 w-10 text-black/25 dark:text-neutral-300" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 grid grid-cols-3 gap-2 mt-8">
          <div className="border col-span-3 md:col-span-1 rounded-md p-4 shadow-sm bg-white text-black/75 dark:text-neutral-300 dark:bg-neutral-800 dark:border-neutral-500">
            <p>Tasks not started</p>
            <p className="text-3xl font-bold mt-2">{getTasksInTodo()}</p>
          </div>
          <div className="border col-span-3 md:col-span-1 rounded-md p-4 shadow-sm bg-white text-black/75 dark:text-neutral-300 dark:bg-neutral-800 dark:border-neutral-500">
            <p>Tasks in progress</p>
            <p className="text-3xl font-bold mt-2">{getTasksInProgress()}</p>
          </div>
          <div className="border col-span-3 md:col-span-1 rounded-md p-4 shadow-sm bg-white text-black/75 dark:text-neutral-300 dark:bg-neutral-800 dark:border-neutral-500">
            <p>Tasks completed</p>
            <p className="text-3xl font-bold mt-2">{getTasksCompleted()}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6">
          {show && (
            <Overlay>
              <Modal form={"project"} hideOverlay={hideModal} params={params} />
            </Overlay>
          )}
          <div className="hidden md:block">
            <div className="flex ">
              <div className="mr-6 hidden md:flex">
                <button
                  onClick={() => setToggle(false)}
                  className={`text-sm text-black/75 rounded-tl-md p-2 border dark:border-neutral-500 dark:border-b-0 border-b-0 w-24 flex items-center justify-center ${
                    toggle === true
                      ? "bg-gray-200 dark:bg-neutral-600"
                      : "bg-white dark:bg-neutral-800"
                  }`}
                >
                  <ViewColumnsIcon className="h-5 w-5 mr-1 text-black/75 dark:text-neutral-300" />
                  Kanban
                </button>
                <button
                  onClick={() => setToggle(true)}
                  className={`text-sm text-black/75 rounded-tr-md p-2 border dark:border-neutral-500 dark:border-b-0 border-b-0 w-24 flex items-center justify-center ${
                    toggle === false
                      ? "bg-gray-200 dark:bg-neutral-600"
                      : "bg-white dark:bg-neutral-800"
                  }`}
                >
                  <QueueListIcon className="h-5 w-5 mr-1 text-black/75 dark:text-neutral-300" />
                  List
                </button>
              </div>
              {toggle === true ? (
                <div className="flex">
                  <button
                    className={`text-sm text-black/75 dark:text-neutral-300 rounded-tl-md p-2 border border-b-0 dark:border-neutral-500 dark:border-b-0 w-24 flex items-center justify-center hover:bg-white transition-all ease-in-out ${
                      filterOption === "todo" && "bg-white dark:bg-neutral-800"
                    } `}
                    onClick={() => setFilterOption("todo")}
                  >
                    To Do
                  </button>
                  <button
                    className={`text-sm text-black/75 dark:text-neutral-300  p-2 border border-b-0 dark:border-neutral-500 dark:border-b-0  w-24 flex items-center justify-center hover:bg-white transition-all ease-in-out ${
                      filterOption === "inProgress" && "bg-white"
                    }`}
                    onClick={() => setFilterOption("inProgress")}
                  >
                    In Progress
                  </button>
                  <button
                    className={`text-sm text-black/75 dark:text-neutral-300 rounded-tr-md p-2 border dark:border-neutral-500 dark:border-b-0  border-b-0 w-24 flex items-center justify-center hover:bg-white transition-all ease-in-out ${
                      filterOption === "done" && "bg-white "
                    }`}
                    onClick={() => setFilterOption("done")}
                  >
                    Done
                  </button>
                  {filterOption !== "" && (
                    <button
                      className={`text-sm text-black/75 dark:text-neutral-300 rounded-tr-md p-2 border border-b-0 dark:border-neutral-500 dark:border-b-0  w-24 flex items-center justify-center hover:bg-white transition-all ease-in-out ${
                        filterOption === "done" && "bg-white"
                      }`}
                      onClick={() => setFilterOption("")}
                    >
                      All
                    </button>
                  )}
                </div>
              ) : (
                <div />
              )}
            </div>
            {toggle === false ? (
              <>
                <div className="grid grid-cols-3 bg-white dark:bg-neutral-800 border dark:border-neutral-500 border-b-0  rounded-br-0 rounded-bl-0 rounded-tr-md pb-4">
                  <div className="flex-col">
                    <div className="text-center mt-4">
                      <h3 className="font-bold text-black/75 dark:text-neutral-300">
                        To Do
                      </h3>
                      <button
                        onClick={showModal}
                        className="px-4 py-2 border dark:border-neutral-500 rounded-md shadow-sm w-11/12 mt-2 bg-white dark:bg-neutral-800 hover:bg-gray-300/25 hover:shadow-md transition-all ease-in-out"
                      >
                        <PlusIcon className="h-4 w-4 mx-auto bg-white dark:bg-neutral-800" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div className="text-center mt-4">
                      <h3 className="font-bold text-black/75 dark:text-neutral-300">
                        In Progress
                      </h3>
                      <button
                        onClick={showModal}
                        className="px-4 py-2 border dark:border-neutral-500 rounded-md shadow-sm w-11/12 mt-2 bg-white dark:bg-neutral-800 hover:bg-gray-300/25 hover:shadow-md transition-all ease-in-out"
                      >
                        <PlusIcon className="h-4 w-4 mx-auto bg-white dark:bg-neutral-800 " />
                      </button>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div className="text-center mt-4">
                      <h3 className="font-bold text-black/75 dark:text-neutral-300 dark:bg-neutral-800">
                        Done
                      </h3>
                      <button
                        onClick={showModal}
                        className="px-4 py-2 border dark:border-neutral-500 rounded-md shadow-sm w-11/12 mt-2 bg-white dark:bg-neutral-800 hover:bg-gray-300/25 hover:shadow-md transition-all ease-in-out"
                      >
                        <PlusIcon className="h-4 w-4 mx-auto bg-white dark:bg-neutral-800" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 bg-white dark:bg-neutral-800 border dark:border-neutral-500 shadow-sm rounded-br-md rounded-bl-md rounded-tr-0 overflow-auto max-h-[575px]">
                  <div className="flex-col">
                    {project.todos?.map((todo: TodoType) =>
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
                    {project.todos.length !== 0 ? (
                      <div>
                        {project.todos?.map((todo: TodoType) =>
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
                        <p className="text-black/75 dark:text-neutral-300 text-sm mt-44">
                          This project does not have any active tasks
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex-col">
                    {project.todos?.map((todo: TodoType) =>
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
              </>
            ) : (
              <div className="bg-white dark:bg-neutral-800 dark:border-neutral-500 border shadow-sm rounded-br-md rounded-bl-md rounded-tr-md md:overflow-auto md:max-h-[750px]">
                <div className="p-5 pt-12">
                  {getFilteredTasksByStage().map((todo: TodoType) => (
                    <div className="border rounded-md shadow-sm text-black/75 dark:text-neutral-300  dark:border-neutral-500 p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h5 className="flex items-center mr-2 text-xl font-bold ">
                            <CubeTransparentIcon className="h-8 w-8 mr-2 text-black/75 dark:text-neutral-300" />
                            {todo.text}
                          </h5>
                          <p className="text-sm text-black/75 dark:text-neutral-300">
                            {todo.category}
                          </p>
                        </div>
                        <div></div>
                      </div>
                      <div className="text-sm my-2">{todo.description}</div>
                      <hr />
                      <div className="flex items-center text-sm mt-2">
                        <div className="flex items-center mr-5">
                          <UserIcon className="h-5 w-5 text-black/75 dark:text-neutral-300 mr-2" />
                          {todo.assignee}
                        </div>
                        <div
                          className={`flex items-center rounded p-1 ${getPriorityClass(
                            todo.priority
                          )}`}
                        >
                          <ExclamationCircleIcon className="h-5 w-5 text-black/75 dark:text-neutral-300 mr-2" />
                          {todo.priority}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="md:hidden">
            <div className="flex ">
              <div className="flex">
                <button
                  className={`text-sm text-black/75 dark:text-neutral-300 rounded-tl-md p-2 border border-b-0 dark:border-neutral-500 dark:border-b-0 w-24 flex items-center justify-center hover:bg-white transition-all ease-in-out ${
                    filterOption === "todo" && "bg-white dark:bg-neutral-800"
                  } `}
                  onClick={() => setFilterOption("todo")}
                >
                  To Do
                </button>
                <button
                  className={`text-sm text-black/75 dark:text-neutral-300  p-2 border border-b-0 dark:border-neutral-500 dark:border-b-0  w-24 flex items-center justify-center hover:bg-white transition-all ease-in-out ${
                    filterOption === "inProgress" && "bg-white"
                  }`}
                  onClick={() => setFilterOption("inProgress")}
                >
                  In Progress
                </button>
                <button
                  className={`text-sm text-black/75 dark:text-neutral-300 rounded-tr-md p-2 border dark:border-neutral-500 dark:border-b-0  border-b-0 w-24 flex items-center justify-center hover:bg-white transition-all ease-in-out ${
                    filterOption === "done" && "bg-white "
                  }`}
                  onClick={() => setFilterOption("done")}
                >
                  Done
                </button>
                {filterOption !== "" && (
                  <button
                    className={`text-sm text-black/75 dark:text-neutral-300 rounded-tr-md p-2 border border-b-0 dark:border-neutral-500 dark:border-b-0  w-24 flex items-center justify-center hover:bg-white transition-all ease-in-out ${
                      filterOption === "done" && "bg-white"
                    }`}
                    onClick={() => setFilterOption("")}
                  >
                    All
                  </button>
                )}
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 dark:border-neutral-500 border shadow-sm rounded-br-md rounded-bl-md rounded-tr-md md:overflow-auto md:max-h-[750px]">
              <div className="p-5 pt-12">
                {getFilteredTasksByStage().map((todo: TodoType) => (
                  <div className="border rounded-md shadow-sm text-black/75 dark:text-neutral-300  dark:border-neutral-500 p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <h5 className="flex items-center mr-2 text-xl font-bold ">
                          <CubeTransparentIcon className="h-8 w-8 mr-2 text-black/75 dark:text-neutral-300" />
                          {todo.text}
                        </h5>
                        <p className="text-sm text-black/75 dark:text-neutral-300">
                          {todo.category}
                        </p>
                      </div>
                      <div></div>
                    </div>
                    <div className="text-sm my-2">{todo.description}</div>
                    <hr />
                    <div className="flex items-center text-sm mt-2">
                      <div className="flex items-center mr-5">
                        <UserIcon className="h-5 w-5 text-black/75 dark:text-neutral-300 mr-2" />
                        {todo.assignee}
                      </div>
                      <div
                        className={`flex items-center rounded p-1 ${getPriorityClass(
                          todo.priority
                        )}`}
                      >
                        <ExclamationCircleIcon className="h-5 w-5 text-black/75 dark:text-neutral-300 mr-2" />
                        {todo.priority}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-black dark:bg-neutral-800 h-44 left-0 -bottom-6 right-0 rounded-bl-md rounded-br-md bg-gradient-to-t from-white to bg-transparent dark:from-neutral-800 to dark:bg-transparent hidden md:block"></div>
      </div>
    </div>
  );
};

export default ProjectPage;
