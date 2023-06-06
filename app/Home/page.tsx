import React from "react";
import TaskTable from "@/components/TaskTable";
import Calendar from "@/components/Calendar";
import UpcomingTodos from "@/components/UpcomingTodos";
import HomeTiles from "@/components/HomeTiles";
import { getLongFormatDate } from "@/components/Helpers";
import { HomeIcon, PlusIcon } from "@heroicons/react/24/outline";
import CalendarRow from "@/components/CalendarRow";

const page = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold flex items-center text-black/75 dark:text-gray-200">
          <HomeIcon className="h-10 w-10 mr-2 mb-2" />
          Home
        </h1>
        <div>
          <button className="border mt-3 rounded-md text-black/75 px-6 py-2 flex items-center shadow-sm hover:bg-white hover:shadow-md transition-all ease-in-out">
            Create Project <PlusIcon className="w-4 h-4 ml-5" />
          </button>
        </div>
      </div>
      <div className="mt-3 mb-5">
        <HomeTiles />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 ">
          <div className="">
            <TaskTable />
          </div>
          <div className="">
            <UpcomingTodos />
          </div>
        </div>
        <div className="col-span-1">
          <CalendarRow year={2021} />
        </div>
      </div>
    </div>
  );
};

export default page;
