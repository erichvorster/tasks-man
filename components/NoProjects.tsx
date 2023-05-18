'use client'

import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

type NoProjectProps = {
  hasProjects: boolean;
};

const NoProjects = ({hasProjects}: NoProjectProps) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mx-auto">
        <p>You currently have no open projects</p>
        <button className="flex items-center py-2 px-4 border rounded-lg mt-4 mx-auto">Create Project<PlusIcon className="h-4 w-4 ml-2"/></button>
      </div>
    </div>
  );
};

export default NoProjects;
