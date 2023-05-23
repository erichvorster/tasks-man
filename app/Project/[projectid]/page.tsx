'use client'



import React, {useContext} from "react";
import Todos from "../../../components/Todos"
import ProjectContext from "@/context/ProjectContext";
import { formatDate, getPriorityClass } from "@/components/Helpers";




const Project = () => {
  const { activeProject} = useContext(ProjectContext);

  console.log(activeProject)
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">{activeProject.name}</h1>
        <div className="mt-6">
          <p className={`mb-4 `}>Priority: <span className={`${getPriorityClass(activeProject.priority)} p-1 rounded`}>{activeProject.priority === "" ? "No Priority" : activeProject.priority}</span></p>
          <p className="mb-4">Deadline: {activeProject.deadline}</p>
          <p>{activeProject.tags}</p>
        </div>
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
};

export default Project;
