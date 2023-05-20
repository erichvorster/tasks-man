"use client";

import React, { useState, useContext } from "react";
import NoProjects from "@/components/NoProjects";
import Projects from "@/components/Projects";
import { Modal } from "@/components/Modal";
import { Overlay } from "@/components/Overlay";
import ProjectForm from "@/components/ProjectForm";
import ProjectContext from "@/context/ProjectContext";

const page = () => {
  const [hasProjects, setHasProjects] = useState(false);
  const [show, setShow] = useState<boolean>(false);
  // const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState({});

  const { projects, setProjects } = useContext(ProjectContext);



  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return (
    <div>
      {projects.length != 0 ? (
        <Projects hasProjects={hasProjects} activeProject={activeProject} />
      ) : (
        <NoProjects hasProjects={hasProjects} showModal={showModal} />
      )}
      {show && (
        <Overlay >
          <Modal hideOverlay={hideModal} setProjects={setProjects} setActiveProject={setActiveProject}/>
        </Overlay>
      )} 
      <button onClick={showModal}>Show Modal</button>
    </div>
  );
};

export default page;
