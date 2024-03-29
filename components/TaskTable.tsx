"use client";
import React, { useContext, useState } from "react";
import ProjectContext from "@/context/ProjectContext";
import {
  TrashIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { formatDate, getPriorityClass } from "./Helpers";
import Link from "next/link";
import { Project } from "@/data/data";

const TaskTable = () => {
  const { projects, setProjects }: any = useContext(ProjectContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterOption, setFilterOption] = useState(1);
  const projectsPerPage = 6;

  function deleteProject(id: string) {
    setProjects((prevProjects: any) =>
      prevProjects.filter((project: Project) => project.id !== id)
    );
  }

  console.log(projects);

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  const filteredProjects = projects
    .filter((project: Project) => {
      const values = Object.values(project);
      for (const value of values) {
        if (
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    })
    .filter((project: Project) => {
      if (filterPriority === "") {
        return true;
      } else {
        return project.priority.toLowerCase() === filterPriority.toLowerCase();
      }
    });

  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Change page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFilter = (priority: string) => {
    if (priority === filterPriority) {
      setFilterPriority("");
    } else {
      setFilterPriority(priority);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex md:justify-between mb-3">
        <div>
          <h1 className="text-xl text-black/50 font-bold">Projects</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex mb-2 md:mb-0">
            <button
              className={`border rounded-md px-2 mr-2 py-1 hover:bg-gray-200/50 focus:bg-gray-200/75 shadow-sm text-sm dark:bg-neutral-800 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-400/25 dark:transition-all dark:ease-in-out ${
                filterOption === 1 && "bg-gray-200/75"
              }`}
              onClick={() => handleFilter("")}
            >
              All
            </button>
            <button
              className=" border rounded-md px-2 mr-2 py-1 hover:bg-gray-200/50 focus:bg-gray-200/75 shadow-sm text-sm dark:bg-neutral-800 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-400/25 dark:transition-all dark:ease-in-out"
              onClick={() => handleFilter("high")}
            >
              High
            </button>
            <button
              className=" border rounded-md px-2 mr-2 py-1 hover:bg-gray-200/50 focus:bg-gray-200/75 shadow-sm text-sm dark:bg-neutral-800 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-400/25 dark:transition-all dark:ease-in-out"
              onClick={() => handleFilter("medium")}
            >
              Medium
            </button>
            <button
              className=" border rounded-md px-2 py-1 md:mr-4 hover:bg-gray-200/50 focus:bg-gray-200/75 shadow-sm text-sm dark:bg-neutral-800 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-400/25 dark:transition-all dark:ease-in-out"
              onClick={() => handleFilter("low")}
            >
              Low
            </button>
          </div>
          <div className="flex items-center border rounded-md shadow-sm dark:bg-neutral-800 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-400/25 dark:transition-all dark:ease-in-out">
            <MagnifyingGlassIcon className="h-7 w-7 p-1" />
            <input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-sm bg-transparent shadow-none border:none outline-none"
            />
          </div>
        </div>
      </div>
      <div className="rounded-lg border py-2 md:h-[280px]  pt-0 relative shadow-sm bg-white dark:bg-neutral-800 dark:border-neutral-500 rounded-tl-md rounded-tr-md">
        <table className="w-full text-sm bg-white text-black/75 dark:bg-neutral-800/25 dark:text-neutral-300 ">
          <thead className="bg-gray-200/50 dark:bg-neutral-700/75">
            <tr className="text-left border-b dark:border-b-neutral-500">
              <th className="py-2 text-gray-500/50 dark:text-neutral-500 font-normal  pl-6">
                Name
              </th>
              <th className="py-2 text-gray-500/50 dark:text-neutral-500 font-normal">
                Priority
              </th>
              <th className="py-2 text-gray-500/50 dark:text-neutral-500 font-normal hidden md:block ">
                Tags
              </th>
              <th className="py-2 text-gray-500/50 dark:text-neutral-500 font-normal">
                Due Date
              </th>
              <th className="py-2 text-right dark:text-neutral-500 text-gray-500/50 font-normal pr-6 hidden md:block ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-neutral-800 ">
            {filteredProjects.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-2">
                  No matching projects found
                </td>
              </tr>
            ) : (
              currentProjects.map((project: Project, i: number) => (
                <tr
                  key={i}
                  className="border-b  hover:bg-gray-100/50 dark:border-b-neutral-700 dark:hover:bg-neutral-700/50 dark:transition-all dark:ease-in-out cursor-pointer transition-colors ease-in-out "
                >
                  <td className="pl-6 ">
                    {" "}
                    <Link href={`/Project/${project.id}`}>
                      <p className="w-full py-2 ">{project.name}</p>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/Project/${project.id}`}>
                      <div className="w-full">
                        <span
                          className={`${getPriorityClass(
                            project.priority
                          )} p-1 rounded-lg`}
                        >
                          {project.priority === ""
                            ? "Not Prioritized"
                            : project.priority}
                        </span>
                      </div>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/Project/${project.id}`}>
                      <p className="w-full py-2 hidden md:block ">
                        {project.tags}
                      </p>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/Project/${project.id}`}>
                      <p className="w-full py-2 ">
                        {formatDate(project.deadline)}
                      </p>
                    </Link>
                  </td>
                  <td className="text-right pr-5 hidden md:block ">
                    <div className="flex justify-end">
                      <PencilIcon className="h-6 w-6 p-1  cursor-pointer transition-colors ease-in-out" />
                      <TrashIcon
                        onClick={() => deleteProject(project.id)}
                        className="ml-2 h-6 w-6 p-1  cursor-pointer transition-colors ease-in-out"
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex justify-between border-t rounded-bl-md rounded-br-md dark:border-t-neutral-500 py-2 px-6 absolute right-0 left-0 bottom-0 bg-white dark:bg-neutral-800">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="border  py-1 px-5 rounded-md cursor-pointer text-sm shadow-sm hover:bg-gray-300/25 hover:shadow-md transition-all ease-in-out dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-400/25 dark:transition-all dark:ease-in-out"
          >
            Prev
          </button>
          <p className="text-gray-500/50 text-xs mt-2">{`Page ${currentPage} of ${Math.ceil(
            filteredProjects.length / projectsPerPage
          )}`}</p>
          <button
            onClick={nextPage}
            disabled={
              currentPage ===
              Math.ceil(filteredProjects.length / projectsPerPage)
            }
            className="border  py-1 px-5 rounded-md cursor-pointer text-sm shadow-sm hover:bg-gray-300/25 hover:shadow-md transition-all ease-in-out  dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-400/25 dark:transition-all dark:ease-in-out"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;
