import React from "react";
import Calendar from "@/components/Calendar";
import CalendarRow from "@/components/CalendarRow";

const page = () => {
  return (
    <div>
      <Calendar year={2021} />
      {/* <CalendarRow year={2021} /> */}
    </div>
  );
};

export default page;
