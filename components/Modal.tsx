import ProjectForm from "./ProjectForm";
import TodoForm from "./TodoForm";

interface ModalProps {
  children?: React.ReactNode;
  hideOverlay: () => void;
  setProjects?: React.Dispatch<React.SetStateAction<never[]>>;
  form: string;
}

export const Modal = ({
  children,
  hideOverlay,
  setProjects,
  params,
  form,
}: ModalProps) => {
  return (
    <div className={"modalContent"}>
      <span onClick={hideOverlay} className={"close"}>
        ×
      </span>
      <div className="p-8">
        {form === "project" ? (
          <ProjectForm
            setProjects={setProjects}
          
            hideOverlay={hideOverlay}
          />
        ) : (
          <TodoForm params={params}/>
        )}
      </div>
    </div>
  );
};
