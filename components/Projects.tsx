'use client'



import React from "react";
import Todos from "./Todos";

type ProjectProps = {
  hasProjects: boolean;
};

const Projects = ({hasProjects}:ProjectProps) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Project title</h1>
        <div className="mt-6">
          <p className="mb-4">Priority: High</p>
          <p className="mb-4">Deadline: 7 June 2023</p>
          <p>Tags</p>
        </div>
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
};

export default Projects;
