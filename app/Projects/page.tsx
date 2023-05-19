"use client";

import React, { useState } from "react";
import NoProjects from "@/components/NoProjects";
import Projects from "@/components/Projects";
import { Modal } from "@/components/Modal";
import { Overlay } from "@/components/Overlay";

const page = () => {
  const [hasProjects, setHasProjects] = useState(false);
  const [show, setShow] = useState<boolean>(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return (
    <div>
      {hasProjects ? (
        <Projects hasProjects={hasProjects} />
      ) : (
        <NoProjects hasProjects={hasProjects} />
      )}
      {show && (
        <Overlay hideOverlay={hideModal}>
          <Modal content="LearnBestCoding Modal" />
        </Overlay>
      )}
      <button onClick={showModal}>Show Modal</button>
    </div>
  );
};

export default page;
