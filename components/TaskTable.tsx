"use client";
import React, { useContext, useState } from "react";
import ProjectContext from "@/context/ProjectContext";
import { TrashIcon, CheckIcon, MagnifyingGlassIcon, PencilIcon } from "@heroicons/react/24/outline";
import { formatDate, getPriorityClass } from "./Helpers";
import Link from "next/link";

const TaskTable = () => {
  const { projects, setProjects } = useContext(ProjectContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterOption, setFilterOption] = useState(1);
  const projectsPerPage = 6;

  function deleteProject(id) {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  }

  console.log(projects);

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  const filteredProjects = projects.filter((project) => {
    const values = Object.values(project);
    for (const value of values) {
      if (value.toString().toLowerCase().includes(searchQuery.toLowerCase())) {
        return true;
      }
    }
    return false;
  }).filter((project) => {
    if (filterPriority === "") {
      return true;
    } else {
      return project.priority.toLowerCase() === filterPriority.toLowerCase();
    }
  });

  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFilter = (priority) => {
    if (priority === filterPriority) {
      setFilterPriority("");
    } else {
      setFilterPriority(priority);
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-3">
        <div>
          <h1 className="text-xl text-gray-700/25 font-bold">Projects</h1>
        </div>
        <div className="flex">
        <div>
            <button className={`border rounded-md px-2 mr-2 py-1 hover:bg-gray-200/50 focus:bg-gray-200/75 shadow-sm text-sm ${filterOption === 1 && "bg-gray-200/75"}`} onClick={() => handleFilter("")}>All</button>
            <button className=" border rounded-md px-2 mr-2 py-1 hover:bg-gray-200/50 focus:bg-gray-200/75 shadow-sm text-sm" onClick={() => handleFilter("high")}>High</button>
            <button className=" border rounded-md px-2 mr-2 py-1 hover:bg-gray-200/50 focus:bg-gray-200/75 shadow-sm text-sm" onClick={() => handleFilter("medium")}>Medium</button>
            <button className=" border rounded-md px-2 mr-2 py-1 hover:bg-gray-200/50 focus:bg-gray-200/75 shadow-sm text-sm" onClick={() => handleFilter("low")}>Low</button>
          </div>
          <div className="flex items-center border rounded-md shadow-sm">
            <MagnifyingGlassIcon className="h-7 w-7 p-1" />
            <input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-sm"
            />
          </div>
        </div>
      </div>
      <div className="rounded-lg border py-2 min-h-[270px] overflow-y-auto pt-0 h-12 relative shadow-sm bg-white ">
        <table className="w-full text-sm bg-white text-black/75">
          <thead className="bg-gray-200/50">
            <tr className="text-left border-b">
              <th className="py-2 text-gray-500/50 font-normal pl-6">Name</th>
              <th className="py-2 text-gray-500/50 font-normal">Priority</th>
              <th className="py-2 text-gray-500/50 font-normal">Tags</th>
              <th className="py-2 text-gray-500/50 font-normal">Due Date</th>
              <th className="py-2 text-right text-gray-500/50 font-normal pr-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredProjects.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-2">
                  No matching projects found
                </td>
              </tr>
            ) : (
              currentProjects.map((project, i) => (
                <>
                <tr
                  key={i}
                  className="border-b hover:bg-gray-100/50 cursor-pointer transition-colors ease-in-out "
                >
                  <td className="py-2 pl-6">{project.name}</td>
                  <td>
                    <span
                      className={`${getPriorityClass(
                        project.priority
                      )} p-1 rounded-lg`}
                    >
                      {project.priority === ""
                        ? "Not Prioritized"
                        : project.priority}
                    </span>
                  </td>
                  <td>{project.tags}</td>
                  <td>{formatDate(project.deadline)}</td>
                  <td className="text-right pr-5">
                    <div className="flex justify-end">
                      <PencilIcon className="h-6 w-6 p-1  cursor-pointer transition-colors ease-in-out" />
                      <TrashIcon
                        onClick={() => deleteProject(project.id)}
                        className="ml-2 h-6 w-6 p-1  cursor-pointer transition-colors ease-in-out"
                      />
                    </div>
                  </td>
                </tr>
               
                </>
              ))
            )}
          </tbody>
        </table>
        <div className="flex justify-between border-t py-2 px-6 absolute right-0 left-0 bottom-0 bg-white">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="border  py-1 px-5 rounded-md cursor-pointer text-sm shadow-sm hover:bg-gray-300/25 hover:shadow-md transition-all ease-in-out"
        >
          Prev
        </button>
        <p className="text-gray-500/50 text-xs mt-2">{`Page ${currentPage} of ${Math.ceil(
          filteredProjects.length / projectsPerPage
        )}`}</p>
        <button
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(filteredProjects.length / projectsPerPage)
          }
          className="border  py-1 px-5 rounded-md cursor-pointer text-sm shadow-sm hover:bg-gray-300/25 hover:shadow-md transition-all ease-in-out"
        >
          Next
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default TaskTable;
