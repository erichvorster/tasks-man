import ProjectForm from "./ProjectForm";
import TodoForm from "./TodoForm";

interface ModalProps {
  children?: React.ReactNode;
  hideOverlay: any;
  setProjects?: React.Dispatch<React.SetStateAction<never[]>>;
  form?: string;
  params?: any;
}

export const Modal = ({
  children,
  hideOverlay,
  setProjects,
  params,
  form,
}: ModalProps) => {
  return (
    <div
      className={`modalContent bg-gray-100 dark:bg-neutral-800 dark:text-neutral-300 text-black/75 shadow-lg w-11/12 md:w-4/12 z-50`}
    >
      <div onClick={hideOverlay} className={"close relative ml-6 group p-4"}>
        <div className="w-5 h-[3px] rotate-45 rounded-md bg-neutral-800 dark:bg-neutral-300 absolute group-hover:rotate-0 group-hover:rounded-md transition-all ease-in-out"></div>
        <div className="w-5 h-[3px] -rotate-45 rounded-md bg-neutral-800 dark:bg-neutral-300 absolute group-hover:rotate-0 group-hover:rounded-md transition-all ease-in-out"></div>
      </div>
      <div className="p-2">
        {form === "project" ? (
          <ProjectForm setProjects={setProjects} hideOverlay={hideOverlay} />
        ) : (
          <TodoForm params={params} hideOverlay={hideOverlay} />
        )}
      </div>
    </div>
  );
};
