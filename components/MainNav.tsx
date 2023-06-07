import {
  HomeIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  InboxIcon,
  ArrowLongRightIcon,
  CubeIcon,
  PlusIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Modal } from "@/components/Modal";
import { Overlay } from "@/components/Overlay";
import { useContext, useState } from "react";
import ProjectContext from "@/context/ProjectContext";
import Image from "next/image";
import logo from "../public/logo.svg";
import Button from "@/components/Button";
import ThemeToggle from "./ThemeToggle";
import ThemeSwitch from "./ThemeSwitch";

const MainNav = ({ toggleNav, setToggleNav }) => {
  const { setActiveProject, projects, setProjects } =
    useContext(ProjectContext);
  const [showProjects, setShowProjects] = useState(false);
  const [show, setShow] = useState<boolean>(false);
  const [isScrolledToTop, setIsScrolledToTop] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  const handleScroll = (e) => {
    const nav = e.target;
    const scrollTop = nav.scrollTop;
    const scrollHeight = nav.scrollHeight;
    const clientHeight = nav.clientHeight;

    setIsScrolledToTop(scrollTop === 0);

    setIsScrolledToBottom(scrollTop + clientHeight === scrollHeight);
  };

  return (
    <div
      className={`bg-gray-100 dark:bg-black ${
        !toggleNav ? "w-20" : "w-72"
      } absolute top-0 bottom-0 left-0 flex-col justify-between  transition-all ease-in-out hidden md:flex`}
    >
      <div className=" flex flex-col justify-between h-44">
        <div className="border-b border-b-neutral-500 pl-5 py-2 flex">
          <Image
            src={logo}
            height={40}
            width={40}
            alt="logo"
            className="cursor-pointer"
            onClick={() => setToggleNav(!toggleNav)}
          />
          {toggleNav && (
            <h1 className="text-3xl font-extrabold pl-2 mt-1 cursor-pointer dark:text-neutral-300">
              HEX
            </h1>
          )}
        </div>
        <ul className="flex flex-col py-4 pl-5 border-b dark:border-b-neutral-500">
          <Link
            href="/Home"
            className={`flex items-center p-2 hover:bg-gray-400/25 dark:hover:bg-neutral-700 rounded-md ${
              !toggleNav ? "w-8/12" : "w-11/12"
            }  group transition-colors ease-in-out`}
          >
            <li className="cursor-pointer  flex items-center">
              <HomeIcon className="w-6 h-6 mr-2" />
              {toggleNav && "Home"}
            </li>
          </Link>
          <li className="cursor-pointer flex items-center">
            <div
              onClick={() => setShowProjects(!showProjects)}
              className={`flex items-center p-2 hover:bg-gray-400/25 dark:hover:bg-neutral-700 rounded-md ${
                !toggleNav ? "w-8/12" : "w-11/12"
              } group transition-colors ease-in-out ${
                toggleNav &&
                showProjects &&
                "bg-gray-400/25 rounded-bl-none rounded-br-none"
              }`}
            >
              <BriefcaseIcon
                className=" w-6 h-6 mr-2"
                onClick={() => setToggleNav(true)}
              />
              {toggleNav && "Projects"}
              {toggleNav && (
                <PlusIcon
                  onClick={showModal}
                  className="h-6 w-6 ml-auto text-transparent group-hover:text-black hover:bg-gray-600/75 dark:hover:bg-neutral-700 hover:text-white rounded-md p-1 transition-colors ease-in-out"
                />
              )}
            </div>
          </li>
          {toggleNav && showProjects && (
            <div
              className={
                showProjects &&
                "bg-gray-100 border dark:bg-neutral-900 dark:border-neutral-500 rounded-bl-lg rounded-br-lg mr-6 shadow-sm relative"
              }
            >
              {projects.length !== 0 && (
                <div
                  className="mt-3 max-h-[500px] overflow-auto dark:bg-neutral-900"
                  onScroll={handleScroll}
                >
                  {projects.map((project, i) => (
                    <li
                      className="cursor-pointer mb-3 flex items-center rounded-bl-md rounded-br-md"
                      key={i}
                      onClick={() => setActiveProject(project)}
                    >
                      <Link
                        href={`/Project/${project.id}`}
                        className="flex items-center hover:bg-gray-400/25 p-2 rounded-md w-full mx-3 text-sm transition-colors ease-in-out"
                      >
                        <StopIcon
                          className="w-5 h-5 mr-2"
                          style={{ color: project.projectColor }}
                        />
                        {project.name}
                      </Link>
                    </li>
                  ))}
                </div>
              )}

              <div
                className={`h-14 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-100 to-transparent dark:from-neutral-900 dark:to-transparent rounded-bl-md rounded-br-md ${
                  isScrolledToBottom && "hidden"
                }`}
              />
              <div
                className={`h-14 absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-100  to-transparent dark:from-neutral-900 dark:to-transparent rounded-bl-md rounded-br-md ${
                  isScrolledToTop && "hidden"
                }`}
              />
            </div>
          )}
          <Link
            href="/Calendar"
            className="flex items-center p-2 hover:bg-gray-400/25 dark:hover:bg-neutral-700 rounded-md w-11/12 transition-colors ease-in-out"
          >
            <li className="cursor-pointer flex items-center ">
              <CalendarDaysIcon className="w-6 h-6 mr-2" />
              {toggleNav && "Calendar"}
            </li>
          </Link>
        </ul>
      </div>

      <div className="">
        <div>
          <ThemeToggle />
        </div>
        <div onClick={showModal}>
          <Button btnText="New project" toggleNav={toggleNav} />
        </div>
      </div>
      {show && (
        <Overlay>
          <Modal
            hideOverlay={hideModal}
            setProjects={setProjects}
            form={"project"}
          />
        </Overlay>
      )}
    </div>
  );
};

export default MainNav;
