"use client";

import React, { useState, useContext } from "react";
import ProjectContext from "@/context/ProjectContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Calendar({ setSelectedProject }) {
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

    const monthRows = [];
    let week = [];

    for (let i = 0; i < monthFirstDay; i++) {
      week.push(<td key={`empty-${i}`} className="empty-cell dark:bg-neutral-700"></td>);
    }

    for (let day = 1; day <= monthDays; day++) {
      const currentDate = new Date(year, month, day);
      const dateString = `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}/${currentDate.getFullYear()}`;

      let tdClassName = "";
      let projectsData = [];

      if (dates[dateString]) {
        tdClassName = "highlight";
        projectsData = dates[dateString];
      }

      week.push(
        <td
          key={`day-${day}`}
          className="font-normal pl-4 py-2 border dark:border-neutral-500 relative pr-4"
        >
          <span className="absolute left-4 top-1">{day}</span>
          {projectsData.length > 0 && (
            <div className="project-names mt-4  rounded-md">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="project-name dark:bg-neutral-700 text-xs rounded-md px-1 py-2 mb-1 text-black/75 dark:text-neutral-300 flex shadow-sm border dark:border-neutral-500 cursor-pointer hover:shadow-md transition-all ease-in-out"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="w-1/12">
                    <div
                      className=" h-full w-[3px] rounded-lg"
                      style={{
                        backgroundColor: project.projectColor,
                      }}
                    />
                  </div>
                  <div className="w-11/12">{project.name}</div>
                </div>
              ))}
            </div>
          )}
        </td>
      );

      if (week.length === 7) {
        monthRows.push(
          <tr className="font-normal pl-4 py-2 border dark:border-neutral-500" key={`week-${day / 7}`}>
            {week}
          </tr>
        );
        week = [];
      }
    }

    if (week.length > 0) {
      monthRows.push(
        <tr
          className="font-normal pl-4 py-2 border dark:border-neutral-500"
          key={`week-${monthDays / 7 + 1}`}
        >
          {week}
        </tr>
      );
    }

    return (
      <div className="rounded-tl-md rounded-tr-md border dark:border-neutral-500 bg-white dark:bg-neutral-800 mt-4 ">
        <div className="flex justify-between py-4 ">
          <div className="ml-4 text-sm text-black/75 dark:text-neutral-300">
            <p className="text-xl font-bold text-black/75 dark:text-neutral-300">Project Schedule</p>
            {getMonthName(month)} {year}
          </div>
          <div>
            <div className="calendar-header flex mx-4">
              <button
                onClick={handlePrevMonth}
                className="flex items-center justify-center mr-4"
              >
                <ChevronLeftIcon className="h-10 w-10 p-3 border shadow-sm rounded-full bg-gray-200/50 dark:bg-neutral-600 text-black/75 dark:text-neutral-300 hover:bg-white hover:shadow-md transition-all ease-in-out" />
              </button>
              <button
                onClick={handleNextMonth}
                className="flex items-center justify-center"
              >
                <ChevronRightIcon className="h-10 w-10 p-3 border shadow-sm rounded-full bg-gray-200/50 dark:bg-neutral-600 text-black/75 dark:text-neutral-300 hover:bg-white hover:shadow-md transition-all ease-in-out" />
              </button>
            </div>
          </div>
        </div>
        <table className="calendar-table  text-black/50 bg-white dark:text-neutral-300 dark:bg-neutral-800">
          <thead className="text-sm text-left">
            <tr className="font-normal">
              <th className="font-normal pl-4 py-2 border dark:border-neutral-500">Monday</th>
              <th className="font-normal pl-4 py-2 border dark:border-neutral-500">Tuesday</th>
              <th className="font-normal pl-4 py-2 border dark:border-neutral-500">Wednesday</th>
              <th className="font-normal pl-4 py-2 border dark:border-neutral-500">Thursday</th>
              <th className="font-normal pl-4 py-2 border dark:border-neutral-500">Friday</th>
              <th className="font-normal pl-4 py-2 border dark:border-neutral-500">Saturday</th>
              <th className="font-normal pl-4 py-2 border dark:border-neutral-500">Sunday</th>
            </tr>
          </thead>
          <tbody>{monthRows}</tbody>
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

export default Calendar;
