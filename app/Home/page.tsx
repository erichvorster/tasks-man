import React from "react";
import TaskTable from "@/components/TaskTable";
import Calendar from "@/components/Calendar";
import UpcomingTodos from "@/components/UpcomingTodos";
import HomeTiles from "@/components/HomeTiles";
import { getLongFormatDate } from "@/components/Helpers";
import { HomeIcon, PlusIcon } from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold flex items-center text-black/75">
          <HomeIcon className="h-10 w-10 mr-2 mb-2" />
          Home
        </h1>
        <div>
          <button className="border mt-6 rounded-md text-black/75 px-6 py-2 flex items-center shadow-sm hover:bg-white hover:shadow-md transition-all ease-in-out">
            Create Project <PlusIcon className="w-4 h-4 ml-5" />
          </button>
        </div>
      </div>

      <p className="ml-12 text-sm">{getLongFormatDate()}</p>
      <div className="mt-7 mb-5">
        <HomeTiles />
      </div>

      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="row-span-1 col-span-1"> <TaskTable /></div>
        <div className=" row-span-3 col-span-1"><UpcomingTodos /></div>
        <div className="row-span-2 col-span-1 bg-white rounded-md h-full w-full">03</div>
      </div>

    </div>
  );
};

export default page;
