import React, { useState } from "react";
import {
  CubeTransparentIcon,
  HomeIcon,
  ChevronLeftIcon, Bars3Icon
} from "@heroicons/react/24/outline";

const MobileNav = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const isScrollingUpwards = () => {    
    const scrollTop = window.pageYOffset;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    console.log(scrollTop, clientHeight, scrollHeight);
    return scrollTop === 0;
    };

    const isScrollingDownwards = () => {
        const scrollTop = window.pageYOffset;

        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        console.log(scrollTop, clientHeight, scrollHeight);
        return scrollTop + clientHeight === scrollHeight;
    };

    console.log(isScrollingUpwards(), isScrollingDownwards());
 
  return (
    <>
      <div className="fixed right-6  mt-3 z-50">
        <button onClick={() => setToggleNav(!toggleNav)} className="p-3 rounded-full dark:bg-black shadow-lg"><Bars3Icon className="h-8 w-8 dark:text-neutral-300"/></button>
      </div>
      <div     className={`md:hidden h-screen  bg-neutral-300/25  absolute bottom-0 top-5 rounded-md right-0  z-50 transition-all ease-in-out   ${!toggleNav ? "dark:bg-transparent -left-5" : "dark:bg-neutral/25 left-0"} transition-all ease-in duration-300`}>
        <div
          className={`md:hidden h-screen  bg-white dark:bg-black absolute left-5 bottom-5 rounded-md top-5 right-5  z-50 transition-all ease-in-out duration-500 p-4 ${
            !toggleNav ? "-translate-x-full" : "translate-x-0"
          } `}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="flex items-center text-xl font-bold">
                <CubeTransparentIcon className="w-10 h-10 mr-2" />
                Cube
              </p>
              <p></p>
            </div>
            <div className="p-3 rounded-full bg-neutral-900">
              <ChevronLeftIcon
                className={`h-5 w-5 ${!toggleNav ? "rotate-180" : "toratae-0"} transition-all ease-in-out duration-700 delay-200`}
                onClick={() => setToggleNav(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
