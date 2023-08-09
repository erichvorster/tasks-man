"use client";

import React, { useState, useContext } from "react";
import NoProjects from "@/components/NoProjects";
import { Modal } from "@/components/Modal";
import { Overlay } from "@/components/Overlay";
import ProjectForm from "@/components/ProjectForm";
import ProjectContext from "@/context/ProjectContext";
import Project from "../Project/[projectid]/page";

const page = () => {
  const [hasProjects, setHasProjects] = useState(false);
  const [show, setShow] = useState<boolean>(false);
  // const [projects, setProjects] = useState([]);
  const {} = useContext(ProjectContext);
  const { projects, setProjects } = useContext<any>(ProjectContext);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return (
    <div>
      {projects.length != 0 ? (
        <Project hasProjects={hasProjects} />
      ) : (
        <NoProjects hasProjects={hasProjects} showModal={showModal} />
      )}
      {show && (
        <Overlay>
          <Modal hideOverlay={hideModal} setProjects={setProjects} />
        </Overlay>
      )}
      <button onClick={showModal}>Show Modal</button>
    </div>
  );
};

export default page;
