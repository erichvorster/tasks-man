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
    <div className={`modalContent bg-gray-100/50 text-black/75 shadow-lg`}>
      <div onClick={hideOverlay} className={"close relative ml-6 group p-4"}>
        <div className="w-5 h-[3px] rotate-45 rounded-md bg-black/75 absolute group-hover:rotate-0 group-hover:bg-black/75 group-hover:rounded-md transition-all ease-in-out"></div>
        <div className="w-5 h-[3px] -rotate-45 rounded-md bg-black/75 absolute group-hover:rotate-0 group-hover:bg-black/75 group-hover:rounded-md transition-all ease-in-out"></div>
      </div>
      <div className="p-2">
        {form === "project" ? (
          <ProjectForm
            setProjects={setProjects}
          
            hideOverlay={hideOverlay}
          />
        ) : (
          <TodoForm params={params} hideOverlay={hideOverlay}/>
        )}
      </div>
    </div>
  );
};
