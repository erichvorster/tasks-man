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
      <Calendar year={2021} setSelectedProject={setSelectedProject} />
      {/* <CalendarRow year={2021} /> */}
    </div>
  );
};

export default page;
