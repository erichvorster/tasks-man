import ProjectForm from "./ProjectForm";

interface ModalProps {
  children?: React.ReactNode;
  hideOverlay: () => void;
  setProjects?: React.Dispatch<React.SetStateAction<never[]>>;
  setActiveProject?: React.Dispatch<React.SetStateAction<{}>>;
}


export const Modal = ({ children, hideOverlay, setProjects, setActiveProject}: ModalProps) => {
  return (
    <div className={"modalContent"}>
      <span onClick={hideOverlay} className={"close"}>
        ×
      </span>
      <div className="p-8">
        <ProjectForm setProjects={setProjects} setActiveProject={setActiveProject} hideOverlay={hideOverlay} />
      </div>
    </div>
  );
};
