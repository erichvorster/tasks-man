'use client'



import React from "react";
import Todos from "./Todos";

type ProjectProps = {
  hasProjects: boolean;
  activeProject: {};
};

const Projects = ({hasProjects, activeProject}:ProjectProps) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">{activeProject.name}</h1>
        <div className="mt-6">
          <p className="mb-4">Priority: {activeProject.priority}</p>
          <p className="mb-4">Deadline:{activeProject.deadline}</p>
          <p>{activeProject.tags}</p>
        </div>
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
};

export default Projects;
