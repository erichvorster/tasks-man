"use client"

import React, { useState, useContext } from "react";
import ProjectContext from "@/context/ProjectContext";

function CalendarRow({ year }) {
  const [currentMonth, setCurrentMonth] = useState(new Date(year, 0));
  const { projects } = useContext(ProjectContext);
  const dates = extractDeadlines(projects);

  function extractDeadlines(objects) {
    var dates = [];

    for (var i = 0; i < objects.length; i++) {
      var obj = objects[i];
      if (obj.hasOwnProperty("deadline")) {
        dates.push(obj.deadline);
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
    const year = currentMonth.getFullYear();
  
    const monthRows = [];
  
    let month = currentMonth.getMonth();
    let monthDays = getMonthDays(year, month);
    let monthFirstDay = getMonthFirstDay(year, month);
  
    while (month <= 11) {
      const monthName = getMonthName(month);
      const monthRowsForMonth = [];
  
      monthRowsForMonth.push(
        <tr key={`month-${month}`}>
          <td className="month-name" colSpan="7">{monthName} {year}</td>
        </tr>
      );
  
      let week = [];
  
      for (let i = 0; i < monthFirstDay; i++) {
        week.push(<td key={`empty-${i}`} className="empty-cell"></td>);
      }
  
      for (let day = 1; day <= monthDays; day++) {
        const currentDate = new Date(year, month, day);
        const dateString = `${
          currentDate.getMonth() + 1
        }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  
        let tdClassName = "";
        if (dates.includes(dateString)) {
          tdClassName = "highlight";
        }
  
        week.push(
          <td key={`day-${day}`} className={tdClassName}>
            {day}
          </td>
        );
  
        if (week.length === 7) {
          monthRowsForMonth.push(<tr key={`week-${day / 7}`}>{week}</tr>);
          week = [];
        }
      }
  
      if (week.length > 0) {
        monthRowsForMonth.push(<tr key={`week-${monthDays / 7 + 1}`}>{week}</tr>);
      }
  
      monthRows.push(monthRowsForMonth);
  
      month++;
      monthDays = getMonthDays(year, month);
      monthFirstDay = getMonthFirstDay(year, month);
    }
  
    return monthRows;
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

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;
    const maxScrollTop = scrollHeight - clientHeight;

    if (scrollTop === maxScrollTop) {
      const nextMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1
      );
      setCurrentMonth(nextMonth);
    }
  };

  return (
    <div
      className="calendar-container"
      style={{ height: "800px", overflowY: "auto" }}
      onScroll={handleScroll}
    >
      {renderCalendar().map((monthRow, index) => (
        <table key={`table-${index}`} className="calendar-table">
          <caption>
            {getMonthName(currentMonth.getMonth())} {currentMonth.getFullYear()}
          </caption>
          <tbody>{monthRow}</tbody>
        </table>
      ))}
    </div>
  );
}

export default CalendarRow;
