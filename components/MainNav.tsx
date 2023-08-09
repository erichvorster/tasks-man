import {
  HomeIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  InboxIcon,
  ArrowLongRightIcon,
  CubeIcon,
  PlusIcon,
  StopIcon,
  CubeTransparentIcon,
  ChevronDoubleUpIcon,
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
import { Project } from "@/data/data";

type MainNavProps = {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainNav = ({ toggleNav, setToggleNav }: MainNavProps) => {
  const { setActiveProject, projects, setProjects } =
    useContext<any>(ProjectContext);
  const [showProjects, setShowProjects] = useState(false);
  const [show, setShow] = useState<boolean>(false);
  const [isScrolledToTop, setIsScrolledToTop] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // const handleToggle2 = () => {
  //   setToggle2(!toggle2);
  // };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleScroll = (e: React.UIEvent<Element>) => {
    const nav = e.target as Element;
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
      } absolute top-0 bottom-0 left-0 flex-col justify-between  transition-all ease-in-out duration-300 hidden md:flex`}
    >
      <div className=" flex flex-col justify-between h-44">
        <div className="border-b border-b-neutral-500 pl-4 py-2 flex items-center">
          <div className="bg-neutral-800 p-2 rounded-md dark:bg-neutral-300">
            <CubeTransparentIcon
              className="w-8 h-8 cursor-pointer text-white dark:text-neutral-800"
              onClick={() => setToggleNav(!toggleNav)}
            />
          </div>
          <p
            className={`${
              toggleNav ? "opacity-100" : "opacity-0"
            } transition-all ease-in-out delay-200 text-3xl font-extrabold pl-2 mt-1 cursor-pointer dark:text-neutral-300`}
          >
            {" "}
            {toggleNav && "Cube"}
          </p>
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
              <p
                className={`${
                  toggleNav ? "opacity-100" : "opacity-0"
                } transition-all ease-in-out delay-200`}
              >
                {" "}
                {toggleNav && "Home"}
              </p>
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
              <div className="h-6 w-6 mr-2">
                <BriefcaseIcon
                  className=" w-6 h-6 mr-2"
                  onClick={() => setToggleNav(true)}
                />
              </div>
              <p
                className={`${
                  toggleNav ? "opacity-100" : "opacity-0"
                } transition-all ease-in-out delay-200`}
              >
                {" "}
                {toggleNav && "Projects"}
              </p>

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
                  className="mt-3 max-h-[300px] overflow-auto dark:bg-neutral-900 rounded-bl-md rounded-br-md"
                  onScroll={handleScroll}
                >
                  {projects.map((project: Project, i: number) => (
                    <li
                      className={`cursor-pointer mb-3 flex items-center ${
                        toggleNav ? "opacity-100" : "opacity-0"
                      } rounded-bl-md rounded-br-md  transition-all ease-in-out delay-700`}
                      key={i}
                      onClick={() => setActiveProject(project)}
                    >
                      <Link
                        href={`/Project/${project.id}`}
                        className={`flex items-center hover:bg-gray-400/25 p-2 rounded-md w-full mx-3 text-sm transition-colors ease-in-out `}
                      >
                        <div className="w-5 h-5 mr-2">
                          <StopIcon
                            className="w-5 h-5 "
                            style={{ color: project.projectColor }}
                          />
                        </div>
                        <p
                          className={`${
                            toggleNav ? "opacity-100" : "opacity-0"
                          } text-xs`}
                        >
                          {" "}
                          {project.name}
                        </p>
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
            className={`flex items-center p-2 hover:bg-gray-400/25 dark:hover:bg-neutral-700 rounded-md w-11/12 ${
              !toggleNav ? "w-8/12" : "w-11/12"
            } transition-colors ease-in-out`}
          >
            <li className="cursor-pointer flex items-center ">
              <CalendarDaysIcon className="w-6 h-6 mr-2" />
              <p
                className={`${
                  toggleNav ? "opacity-100" : "opacity-0"
                } transition-all ease-in-out delay-200`}
              >
                {" "}
                {toggleNav && "Calendar"}
              </p>
            </li>
          </Link>
        </ul>
      </div>

      <div className="">
        <div className="w-full flex justify-center items-center">
          <div
            onClick={() => setToggleNav(!toggleNav)}
            className={`border border-neutral-800 ${
              toggleNav ? "h-24 mb-8" : "h-24 mb-8"
            } dark:border-neutral-300 px-3 rounded-lg  transition-all ease-in-out duration-300 flex justify-center items-center cursor-pointer hover:bg-gray-400/25`}
          >
            <ChevronDoubleUpIcon
              className={`text-neutral-300 h-6 w-6 ${
                toggleNav ? "-rotate-90" : "rotate-90"
              } transition-all ease-in-out duration-300  `}
            />
          </div>
        </div>
        <div>
          <ThemeToggle />
        </div>
        <div onClick={showModal} className="mb-5">
          <button
            className={`flex items-center py-2 px-4 border ${
              toggleNav ? "px-24" : "px-3"
            } rounded-lg mt-4 mx-auto hover:bg-gray-400/25 transition-all ease-in-out duration-300 hover:shadow-xl`}
          >
            <PlusIcon className="h-4 w-4 " />
          </button>
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
