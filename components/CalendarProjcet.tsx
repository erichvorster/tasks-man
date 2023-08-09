import React, { useContext } from "react";
import ProjectContext from "@/context/ProjectContext";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type CalendarProjectProps = {
  selectedProject: string;
};

export type Todo = {
  id: string;
  text: string;
  category: "todo" | "inProgress" | "done";
  description: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  assignee: string;
};
type Project = {
  name: string;
  deadline: string;
  tags: string;
  priority: "low" | "medium" | "high";
  todos: Todo[];
  id: string;
  projectColor: string;
  projectDescription: string;
};

const CalendarProject = ({ selectedProject }: CalendarProjectProps) => {
  const { projects } = useContext<any>(ProjectContext);

  console.log("projects", selectedProject);

  // Find the specific project based on the selectedProject ID
  const project =
    selectedProject !== ""
      ? projects.find((project: Project) => project.id === selectedProject)
      : projects[0];

  return (
    <div className="w-full h-56 bg-white dark:bg-neutral-800 rounded-md shadow-sm border dark:border-neutral-500 p-4">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h1 className="text-2xl font-bold text-black/75 dark:text-neutral-300 flex items-center cursor-pointer ">
            {project.name}{" "}
            <Link href={`/Project/${project.id}`}>
              <LinkIcon className="h-7 w-7 ml-2" />
            </Link>
          </h1>
          <p className="text-sm text-black/75 dark:text-neutral-300 mt-2">
            {project.projectDescription}
          </p>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default CalendarProject;
