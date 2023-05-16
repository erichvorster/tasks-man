import React from "react";

const MainNav = () => {
  return (
    <div className="bg-slate-100 w-44  absolute top-0 bottom-0 left-0">
      <div className=" flex flex-col justify-between h-44">
        <h1>Logo</h1>
        <ul className="flex flex-col h-36 justify-around pl-4 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Tasks</li>
          <li className="cursor-pointer">Calender</li>
          <li className="cursor-pointer">Inbox</li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
