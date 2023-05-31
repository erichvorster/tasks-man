"use client";

import React, { useContext } from "react";
import ProjectContext from "@/context/ProjectContext";

const UpcomingTodos = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-700/25 mb-3">
        Upcoming todos
      </h1>
      <div className="rounded-lg border py-2 pt-0 bg-white shadow-sm">
        <table className="w-full bg-white text-black/75 text-sm">
          <thead className="border-b bg-gray-100">
            <tr className=" border-b">
              <th className="text-left py-2 text-gray-500/50 font-normal px-2 pl-6">
                Task
              </th>
              <th className="text-left py-2 text-gray-500/50 font-normal px-2">
                Description
              </th>
              <th className="text-left py-2 text-gray-500/50 font-normal px-2">
                Priority
              </th>
              <th className="text-left py-2 text-gray-500/50 font-normal px-2">
                Due
              </th>
              <th className="text-right py-2 text-gray-500/50 font-normal px-2 pr-6">
                Project
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              return project.todos.map((todo) => {
                return (
                  <tr className="border-b hover:bg-gray-100/50 cursor-pointer transition-colors ease-in-out">
                    <td className="text-left p-2 pl-6">{todo.text}</td>

                    <td className="text-left p-2">
                      {todo.description.slice(5, 50)}
                      <span className="text-md font-bold"> ...</span>
                    </td>
                    
                   
                    <td className="text-left p-2">{todo.priority}</td>
                    <td className="text-left p-2">{todo.dueDate}</td>
                    <td className="text-right p-2 pr-6">{project.name}</td>
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
