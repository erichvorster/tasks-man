"use client";

import React, { useContext } from "react";
import ProjectContext from "@/context/ProjectContext";

const UpcomingTodos = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div className="mt-6">
      <h1 className="text-xl font-bold text-black/50 mb-3 ">Upcoming todos</h1>
      <div className="rounded-lg border dark:border-neutral-500 py-2 pt-0 bg-white dark:bg-neutral-800 shadow-sm md:max-h-[300px] md:overflow-auto rounded-tl-md rounded-tr-md">
        <table className="w-full bg-white text-black/75 dark:bg-neutral-800 dark:text-neutral-300 text-sm relative ">
          <thead className="border-b  dark:border-b-neutral-500 bg-gray-100 dark:bg-neutral-700 sticky top-0  z-10">
            <tr className=" border-b dark:border-b-neutral-500">
              <th className="text-left py-2 text-gray-500/50 font-normal px-2 pl-6">
                Task
              </th>
              <th className="text-left py-2 text-gray-500/50 dark:text-neutral-500 font-normal px-2">
                Assignee
              </th>
              <th className="text-left py-2 text-gray-500/50 dark:text-neutral-500 font-normal px-2 hidden md:block">
                Description
              </th>
              <th className="text-left py-2 text-gray-500/50 dark:text-neutral-500 font-normal px-2">
                Priority
              </th>
              <th className="text-left py-2 text-gray-500/50 dark:text-neutral-500 font-normal px-2">
                Due
              </th>
              <th className="text-right py-2 text-gray-500/50 dark:text-neutral-500 font-normal px-2 pr-6 hidden md:block">
                Project
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              return project.todos.map((todo) => {
                return (
                  <tr className="border-b dark:border-b-neutral-700 dark:hover:bg-neutral-700/50 hover:bg-gray-100/50 cursor-pointer transition-colors ease-in-out">
                    <td className="text-left p-2 pl-6">{todo.text}</td>
                    <td className="text-left p-2">
                      {todo.assignee ? todo.assignee : "Unassigned"}
                    </td>
                    <td className="text-left p-2 hidden md:block">
                      {todo.description.slice(5, 35)}
                      <span className="text-md font-bold"> ...</span>
                    </td>
                    <td className="text-left p-2">{todo.priority}</td>
                    <td className="text-left p-2">{todo.dueDate}</td>
                    <td className="text-right p-2 pr-6 hidden md:block">
                      {project.name}
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
        {/* <div className="absolute bottom-0 left-1 right-1 h-12 bg-gradient-to-t rounded-bl-md rounded-br-md from-white to-transparent" /> */}
      </div>
    </div>
  );
};

export default UpcomingTodos;
