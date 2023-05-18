'use client'

import React, {useState} from "react";
import NoProjects from "@/components/NoProjects";
import Projects from "@/components/Projects";
import ProjectModal from "@/components/ProjectModal";

const page = () => {
  
  const [hasProjects, setHasProjects] = useState(false);


  return (
    <div>
      {hasProjects ? <Projects hasProjects={hasProjects} /> : <NoProjects hasProjects={hasProjects}/>}
      <ProjectModal isOpen={true} onClose={() => {}}>
        <h1>This is the modal</h1>
      </ProjectModal>
    </div>
  );
};

export default page;
