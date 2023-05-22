"use client";

import React, { useContext } from "react";
import ProjectContext from "@/context/ProjectContext";

const TaskTable = () => {
  const { projects } = useContext(ProjectContext);

  console.log("projects", projects);

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
            <th className="py-2">Name</th>
            <th className="py-2">Status</th>
            <th className="py-2">Tags</th>
            <th className="py-2">Due Date</th>
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
                <td>{project.name}</td>
                <td>{project.status}</td>
                <td>{project.tags}</td>
                <td>{project.dueDate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
