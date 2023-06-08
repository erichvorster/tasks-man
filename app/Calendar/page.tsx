"use client";

import React from "react";
import Calendar from "@/components/Calendar";
import CalendarRow from "@/components/CalendarRow";
import CalendarProjcet from "@/components/CalendarProjcet";
const page = () => {
  const [selectedProject, setSelectedProject] = React.useState("");
  console.log(selectedProject);

  return (
    <div>
      <CalendarProjcet selectedProject={selectedProject} />
      <div className="hidden md:block">
        <Calendar year={2021} setSelectedProject={setSelectedProject} />
      </div>
      <div className="md:hidden mt-12">
        <CalendarRow year={2021} />
      </div>
    </div>
  );
};

export default page;
