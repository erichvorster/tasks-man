'use client'

import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import Button from "./Button";

type NoProjectProps = {
  hasProjects: boolean;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const NoProjects = ({hasProjects, showModal}: NoProjectProps) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mx-auto">
        <p>You currently have no open projects</p>
        <Button btnText={"New Project"}/>
      </div>
    </div>
  );
};

export default NoProjects;
