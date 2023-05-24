import React from "react";
import TaskTable from "@/components/TaskTable";
import Calendar from "@/components/Calendar";
import UpcomingTodos from "@/components/UpcomingTodos";

const page = () => {
  return (
    <div>
      <TaskTable />
      <div className="grid grid-cols-2 mt-12">
        <div>
          <UpcomingTodos />
        </div>
      </div>
    </div>
  );
};

export default page;
