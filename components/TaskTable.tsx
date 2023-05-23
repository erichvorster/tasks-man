"use client";

import React, { useContext } from "react";
import ProjectContext from "@/context/ProjectContext";
import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import { formatDate, getPriorityClass } from "./Helpers";

const TaskTable = () => {
  const { projects, setProjects } = useContext(ProjectContext);

  console.log("projects", projects);


  

  function deleteProject(id) {
    console.log(id);
    setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <p className="font-bold">{projects.length} total tasks</p>
        </div>
        <div className="flex">
          <h2>Current Tasks</h2>
          <h2>Completed Task</h2>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left border-t border-b ">
            <th className="py-2 text-gray-500/50 font-normal">Name</th>
            <th className="py-2 text-gray-500/50 font-normal">Priority</th>
            <th className="py-2 text-gray-500/50 font-normal">Tags</th>
            <th className="py-2 text-gray-500/50 font-normal">Due Date</th>
            <th className="py-2 text-right text-gray-500/50 font-normal">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-2">
                You currently have no projects
              </td>
            </tr>
          ) : (
            projects.map((project, i) => (
              <tr key={i}>
                <td className="pt-3">{project.name}</td>
                <td><span className={`${getPriorityClass(project.priority)} p-1 rounded-lg`}>{project.priority === "" ? "Not Prioritized" : project.priority}</span></td>
                <td>{project.tags}</td>
                <td>{formatDate(project.deadline)}</td>
                <td className="text-right"><div className="flex justify-end"><CheckIcon className="h-8 w-8 p-1 bg-green-300/25 border-2 border-green-400/25 hover:bg-green-600/25 rounded-lg cursor-pointer transition-colors ease-in-out"/><TrashIcon onClick={() => deleteProject(project.id)} className="ml-2 h-8 w-8 p-1 bg-red-300/25 border-2 border-red-400/25 hover:bg-red-600/25 rounded-lg cursor-pointer transition-colors ease-in-out"/></div></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
