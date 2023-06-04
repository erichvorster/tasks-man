"use client";

import React, { useState, useContext } from "react";
import ProjectContext from "@/context/ProjectContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function CalendarRow({ setSelectedProject }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { projects } = useContext(ProjectContext);
  const dates = extractDeadlines(projects);

  function extractDeadlines(objects) {
    var dates = {};

    for (var i = 0; i < objects.length; i++) {
      var obj = objects[i];
      if (obj.hasOwnProperty("deadline")) {
        const date = obj.deadline;
        if (dates[date]) {
          dates[date].push(obj);
        } else {
          dates[date] = [obj];
        }
      }
    }

    return dates;
  }

  const getMonthDays = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthFirstDay = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();

    const monthDays = getMonthDays(year, month);
    const monthFirstDay = getMonthFirstDay(year, month);

    const calendarRows = [];

    calendarRows.push(
      <tr className="font-normal pl-4 py-2 border" key={`month-name`}>
        <td className="font-normal pl-4 py-2 border" colSpan={3}>
          {getMonthName(month)} {year}
        </td>
      </tr>
    );

    for (let day = 0; day < monthDays; day++) {
      const currentDate = new Date(year, month, day + 1);
      const dateString = `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}/${currentDate.getFullYear()}`;

      let tdClassName = "";
      let projectsData = [];

      if (dates[dateString]) {
        tdClassName = "highlight";
        projectsData = dates[dateString];
      }

      calendarRows.push(
        <tr className="font-normal pl-4 py-2 border" key={`day-${day}`}>
          <td className="font-normal pl-4 py-2 border">{day + 1}</td>
        </tr>
      );

      if (projectsData.length > 0) {
        calendarRows.push(
          <tr className="font-normal pl-4 py-2 border" key={`projects-${day}`}>
            <td className="font-normal pl-4 py-2 border">
              <div className="project-names mt-4">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="project-name text-xs rounded-md px-1 py-2 mb-1 text-black/75 flex shadow-sm border cursor-pointer hover:shadow-md transition-all ease-in-out"
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
                ))}
              </div>
            </td>
          </tr>
        );
      }
    }

    return (
      <div className="rounded-tl-md rounded-tr-md border bg-white max-h-[600px] overflow-auto">
        <div className="flex justify-between py-4 sticky top-0 bg-white border-b">
          <div className="ml-4 text-sm text-black/75">
            <p className="text-xl font-bold text-black/75">Project Schedule</p>
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
        <table className="calendar-table text-black/50 bg-white ">
          <tbody className="">{calendarRows}</tbody>
        </table>
      </div>
    );
  };

  const getMonthName = (month) => {
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
