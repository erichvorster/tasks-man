import React, { useContext } from "react";
import ProjectContext from "@/context/ProjectContext";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const CalendarProject = ({ selectedProject }) => {
  const { projects } = useContext(ProjectContext);

  // Find the specific project based on the selectedProject ID
  const project = selectedProject !== "" ? projects.find((project) => project.id === selectedProject) : projects[0] 

  return (
    <div className="w-full h-56 bg-white rounded-md shadow-sm border p-4">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
            <h1 className="text-2xl font-bold text-black/75 flex items-center cursor-pointer ">{project.name} <Link href={`/Project/${project.id}`}><LinkIcon className="h-7 w-7 ml-2"/></Link></h1>
            <p className="text-sm text-black/75 mt-2">{project.projectDescription}</p>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default CalendarProject;
