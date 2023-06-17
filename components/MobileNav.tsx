import React, { useState, useContext } from "react";
import {
  CubeTransparentIcon,
  HomeIcon,
  ChevronLeftIcon,
  Bars3Icon,
  BriefcaseIcon,
  CalendarDaysIcon,
  InboxIcon,
  ArrowLongRightIcon,
  CubeIcon,
  PlusIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ProjectContext from "@/context/ProjectContext";
import ThemeToggle from "./ThemeToggle";
import { Overlay } from "./Overlay";
import { Modal } from "./Modal";

const MobileNav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const { setActiveProject, projects, setProjects } =
    useContext(ProjectContext);
  const [show, setShow] = useState<boolean>(false);
  console.log(toggleNav);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return (
    <>
      <div
        onClick={() => setToggleNav(true)}
        className={`fixed right-6  mt-3 z-50 ${
          toggleNav ? "hidden opacity-100" : "block opacity-50"
        } transition-all ease-in-out duration-300`}
      >
        <button className="p-3 rounded-full dark:bg-black shadow-lg">
          <Bars3Icon className="h-8 w-8 dark:text-neutral-300" />
        </button>
      </div>
      <div
        className={`md:hidden h-screen  bg-neutral-300/25  absolute bottom-0 top-0 rounded-md right-0  z-40 transition-all ease-in-out   ${
          !toggleNav
            ? "dark:bg-transparent -left-5 hidden"
            : "dark:bg-neutral/25 left-0"
        } transition-all ease-in duration-300`}
      >
        <div
          className={`md:hidden h-screen  bg-white dark:bg-black absolute left-5 rounded-md top-5 right-5  z-50 transition-all ease-in-out duration-500 p-4 ${
            !toggleNav ? "-translate-x-full" : "translate-x-0"
          } `}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="flex items-center text-xl font-bold text-neutral-800 dark:text-neutral-300 ">
                <CubeTransparentIcon className="w-10 h-10 mr-2 dark:text-neutral-800 text-neutral-300 bg-neutral-800 dark:bg-neutral-300 rounded-md" />
                Cube
              </p>
              <p></p>
            </div>
            <div className="p-3 rounded-full bg-neutral-900">
              <ChevronLeftIcon
                className={`h-5 w-5 ${
                  !toggleNav ? "rotate-180" : "toratae-0"
                } transition-all ease-in-out duration-300 delay-200`}
                onClick={() => setToggleNav(false)}
              />
            </div>
          </div>
          <div>
            <ul className="flex flex-col py-4 pl-0 border-b dark:border-b-neutral-500">
              <Link
                href="/Home"
                className={`flex items-center p-2 hover:bg-gray-400/25 dark:hover:bg-neutral-700 rounded-md ${
                  !toggleNav ? "w-8/12" : "w-11/12"
                }  group transition-colors ease-in-out`}
              >
                <li
                  className="cursor-pointer  flex items-center dark:text-neutral-300"
                  onClick={() => setToggleNav(false)}
                >
                  <HomeIcon className="w-6 h-6 mr-2" />
                  {toggleNav && "Home"}
                </li>
              </Link>
              <li className="cursor-pointer flex items-center dark:text-neutral-300">
                <div
                  onClick={() => setShowProjects(!showProjects)}
                  className={`flex items-center p-2 hover:bg-gray-400/25 dark:hover:bg-neutral-700 w-full rounded-md group transition-colors ease-in-out ${
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
                      // onClick={showModal}
                      className="h-6 w-6 ml-auto text-transparent group-hover:text-black hover:bg-gray-600/75 dark:hover:bg-neutral-700 hover:text-white rounded-md p-1 transition-colors ease-in-out"
                    />
                  )}
                </div>
              </li>
              {toggleNav && showProjects && (
                <div
                  className={
                    showProjects &&
                    "bg-gray-100 border dark:bg-neutral-900 dark:border-neutral-500 rounded-bl-lg rounded-br-lg  shadow-sm relative"
                  }
                >
                  {projects.length !== 0 && (
                    <div className="mt-3 max-h-[300px] overflow-auto dark:bg-neutral-900 rounded-bl-md rounded-br-md">
                      {projects.map((project, i) => (
                        <li
                          className="cursor-pointer mb-3 flex items-center rounded-bl-md rounded-br-md"
                          key={i}
                          onClick={() => {
                            setActiveProject(project);
                            setToggleNav(false);
                          }}
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
                </div>
              )}
              <Link
                href="/Calendar"
                className="flex items-center p-2 hover:bg-gray-400/25 dark:hover:bg-neutral-700 rounded-md w-11/12 transition-colors ease-in-out"
              >
                <li
                  className="cursor-pointer flex items-center dark:text-neutral-300"
                  onClick={() => setToggleNav(false)}
                >
                  <CalendarDaysIcon className="w-6 h-6 mr-2" />
                  {toggleNav && "Calendar"}
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-4">
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            <button
              onClick={() => {
                showModal();
                setToggleNav(false);
              }}
              className="flex mx-auto items-center px-4 py-2 border dark:border-neutral-600 rounded-md mt-5 dark:text-neutral-300"
            >
              {" "}
              New Project <PlusIcon className="h-4 w-4 ml-2" />
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
    </>
  );
};

export default MobileNav;
