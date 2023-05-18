import React from "react";
import {
  HomeIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

const MainNav = () => {
  return (
    <div className="bg-slate-100 w-72  absolute top-0 bottom-0 left-0">
      <div className=" flex flex-col justify-between h-44">
        <div className="border-b-2 pl-4 py-2">
          <h1 className="text-3xl font-bold">Taski</h1>
        </div>
        <ul className="flex flex-col h-52 py-4 pl-4 border-b-2 ">
          <li className="cursor-pointer mb-3 flex items-center">
            <HomeIcon className="w-4 h-4 mr-2" />
            Home
          </li>
          <li className="cursor-pointer mb-3 flex items-center">
            <BriefcaseIcon className="w-4 h-4 mr-2" />
            Projects
          </li>
          <li className="cursor-pointer mb-3 flex items-center">
            <CalendarDaysIcon className="w-4 h-4 mr-2" />
            Calender
          </li>
          <li className="cursor-pointer mb-3 flex items-center">
            <InboxIcon className="w-4 h-4 mr-2" />
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
    </div>
  );
};

export default MainNav;
