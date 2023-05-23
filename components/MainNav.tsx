import {
  HomeIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  InboxIcon,
  ArrowLongRightIcon,
  CubeIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Modal } from "@/components/Modal";
import { Overlay } from "@/components/Overlay";
import { useContext, useState } from "react";
import ProjectContext from "@/context/ProjectContext";
import Image from "next/image";
import logo from "../public/logo.svg";
import Button from "@/components/Button";

const MainNav = ({ projects, setProjects }) => {
  const { activeProject, setActiveProject } = useContext(ProjectContext);
  const [showProjects, setShowProjects] = useState(false);

  const [show, setShow] = useState<boolean>(false);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="bg-gray-100 w-72  absolute top-0 bottom-0 left-0 flex flex-col justify-between">
      <div className=" flex flex-col justify-between h-44">
        <div className="border-b-2 pl-4 py-2 flex">
          <Image src={logo} height={40} width={40} alt="logo"/>
          <h1 className="text-3xl font-extrabold pl-2 mt-1">HEX</h1>
        </div>
        <ul className="flex flex-col py-4 pl-4 border-b-2 ">
          <Link
            href="/Home"
            className="flex items-center p-2 hover:bg-slate-400/25 rounded-md w-11/12 group"
          >
            <li className="cursor-pointer  flex items-center">
              <HomeIcon className="w-6 h-6 mr-2" />
              Home
            </li>
          </Link>
          <li className="cursor-pointer mb-3 flex items-center">
            <Link
              href="/Projects"
              onClick={() => setShowProjects(!showProjects)}
              className="flex items-center p-2 hover:bg-slate-400/25 rounded-md w-11/12 group"
            >
              <BriefcaseIcon className="w-6 h-6 mr-2" />
              Projects
              <PlusIcon
                onClick={showModal}
                className="h-6 w-6 ml-auto text-transparent group-hover:text-black hover:bg-white rounded-md p-1"
              />
            </Link>
          </li>
          {showProjects && (
            <div>
              {projects.length !== 0 && (
                <div className="ml-8">
                  {projects.map((project, i) => (
                    <li
                      className="cursor-pointer mb-3 flex items-center"
                      key={i}
                      onClick={() => setActiveProject(project)}
                    >
                      <Link
                        href={`/Project/${project.id}`}
                        className="flex items-center hover:bg-slate-400/25 p-2 rounded-md w-11/12"
                      >
                        <ArrowLongRightIcon className="w-5 h-5 mr-2 " />
                        {project.name}
                      </Link>
                    </li>
                  ))}
                </div>
              )}
            </div>
          )}
          <Link href="/Calendar">
            <li className="cursor-pointer mb-3 flex items-center">
              <CalendarDaysIcon className="w-6 h-6 mr-2" />
              Calender
            </li>
          </Link>
          <li className="cursor-pointer mb-3 flex items-center">
            <InboxIcon className="w-6 h-6 mr-2" />
            Inbox
          </li>
        </ul>
        <ul className="flex flex-col h-52 py-4 pl-4 border-b-2 ">
          <li className="cursor-pointer mb-3">Home</li>
          <li className="cursor-pointer mb-3">Tasks</li>
        </ul>
        <ul className="flex flex-col h-52 py-4 pl-4 border-b-2 ">
          <li className="cursor-pointer mb-3">Home</li>
          <li className="cursor-pointer mb-3">Tasks</li>
          <li className="cursor-pointer mb-3">Calender</li>
          <li className="cursor-pointer mb-3">Inbox</li>
        </ul>
      </div>
      <div className="mb-6" onClick={showModal}>
        <Button btnText="New project"/>
      </div>
      {show && (
        <Overlay>
          <Modal hideOverlay={hideModal} setProjects={setProjects} />
        </Overlay>
      )}
    </div>
  );
};

export default MainNav;
