"use client";

import React, { useContext } from "react";
import ProjectContext from "@/context/ProjectContext";

const UpcomingTodos = () => {
  const { projects, setProjects, activeProject, setActiveProject } =
    useContext(ProjectContext);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Upcoming todos</h1>
      <div className="rounded-lg border py-2 ">
        <table className="w-full">
          <thead className="border-b bg-slate-100">
            <tr className=" border-b">
              <th className="text-left py-2 text-gray-500/50 font-normal px-2">
                Todo
              </th>
              <th className="text-left py-2 text-gray-500/50 font-normal px-2">
                Due
              </th>
              <th className="text-right py-2 text-gray-500/50 font-normal px-2">
                Project
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              return project.todos.map((todo) => {
                return (
                  <tr className="border-b hover:bg-slate-100/50 cursor-pointer transition-colors ease-in-out">
                    <td className="text-left p-2">{todo.text}</td>
                    <td className="text-left p-2">{todo.due}</td>
                    <td className="text-right p-2">{project.name}</td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingTodos;
