"use client";

import React, { useState, useContext } from "react";
import ProjectContext from "@/context/ProjectContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type CalendarRowProps = {
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
};

function CalendarRow({ setSelectedProject }: CalendarRowProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { projects } = useContext<any>(ProjectContext);
  const dates = extractDeadlines(projects);

  function extractDeadlines(objects:any) {
    var dates = {};

    for (var i = 0; i < objects.length; i++) {
      var obj = objects[i];
      if (obj.hasOwnProperty("deadline")) {
        const date = obj.deadline;
        //@ts-ignore
        if (dates[date]) {
          //@ts-ignore
          dates[date].push(obj);
        } else {
          //@ts-ignore
          dates[date] = [obj];
        }
      }
    }

    return dates;
  }

  const getMonthDays = (year:number, month:number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthFirstDay = (year:number, month:number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();

    const monthDays = getMonthDays(year, month);
    const monthFirstDay = getMonthFirstDay(year, month);

    const calendarRows = [];

    for (let day = 0; day < monthDays; day++) {
      const currentDate = new Date(year, month, day + 1);
      const dateString = `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}/${currentDate.getFullYear()}`;

      let tdClassName = "";
      let projectsData = [];

      //@ts-ignore
      if (dates[dateString]) {
        tdClassName = "highlight";
        //@ts-ignore
        projectsData = dates[dateString];
      }

      calendarRows.push(
        <tr
          className="font-normal pl-4 py-2 border border-x-0 dark:border-neutral-500 text-black/75 dark:text-neutral-300"
          key={`day-${day}`}
        >
          <td className="font-normal pl-4 py-2 border border-x-0 dark:border-neutral-500">
            {day + 1}
          </td>
        </tr>
      );

      if (projectsData.length > 0) {
        calendarRows.push(
          <tr
            className="font-normal pl-4 py-2  dark:border-b-neutral-500 text-black/75 dark:text-neutral-300"
            key={`projects-${day}`}
          >
            <td className="font-normal pl-4 py-2">
              <div className="project-names mt-4">
                {projectsData.map((project:any) => (
                  <Link href={`/Project/${project.id}`}>
                    <div
                      key={project.id}
                      className="project-name text-xs rounded-md px-1 py-2 mb-1 text-black/75 dark:text-neutral-300 flex shadow-sm border cursor-pointer hover:shadow-md transition-all ease-in-out"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <div className="w-1/12">
                        <div
                          className="h-full w-[3px] rounded-lg"
                          style={{
                            backgroundColor: project.projectColor,
                          }}
                        />
                      </div>
                      <div className="w-11/12">{project.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </td>
          </tr>
        );
      }
    }

    return (
      <div className="rounded-md border dark:border-neutral-500 bg-white dark:bg-neutral-800 md:max-h-[675px] md:overflow-auto ">
        <div className="flex justify-between py-4 sticky top-0 dark:bg-neutral-700  bg-white border-b">
          <div className="ml-4 text-sm text-black/75 ">
            <p className="text-xl font-bold text-black/75 dark:text-neutral-300">
              Project Schedule
            </p>
            <p className="text-lg text-black/75 dark:text-neutral-300">
              {getMonthName(month)} {year}
            </p>
            <Link
              href="/Calendar"
              className="text-black/75 dark:text-neutral-300 transition-all ease-in-out text-xs hover:underline "
            >
              View Detailed Calendar
            </Link>
          </div>
          <div>
            <div className="calendar-header flex mx-4">
              <button
                onClick={handlePrevMonth}
                className="flex items-center justify-center mr-4"
              >
                <ChevronLeftIcon className="h-10 w-10 p-3 border shadow-sm rounded-full bg-gray-200/50 text-black/75 hover:bg-white hover:shadow-md transition-all ease-in-out" />
              </button>
              <button
                onClick={handleNextMonth}
                className="flex items-center justify-center"
              >
                <ChevronRightIcon className="h-10 w-10 p-3 border shadow-sm rounded-full bg-gray-200/50 text-black/75 hover:bg-white hover:shadow-md transition-all ease-in-out" />
              </button>
            </div>
          </div>
        </div>
        <table className="calendar-table-row text-black/50  bg-white dark:bg-neutral-800 ">
          <tbody className="">{calendarRows}</tbody>
        </table>
      </div>
    );
  };

  const getMonthName = (month:number) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1
    );
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1
    );
    setCurrentMonth(nextMonth);
  };

  return <div className="calendar">{renderCalendar()}</div>;
}

export default CalendarRow;
