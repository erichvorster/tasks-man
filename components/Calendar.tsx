"use client";

import React, { useState } from "react";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dates = ["8/21/2023", "8/24/2023", "8/29/2023"];

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
        monthRows.push(<tr key={`week-${day / 7}`}>{week}</tr>);
        week = [];
      }
    }

    if (week.length > 0) {
      monthRows.push(<tr key={`week-${monthDays / 7 + 1}`}>{week}</tr>);
    }

    return (
      <table className="calendar-table">
        <caption>
          {getMonthName(month)} {year}
        </caption>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>{monthRows}</tbody>
      </table>
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

  const goToPrevMonth = () => {
    const prevMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1
    );
    setCurrentMonth(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1
    );
    setCurrentMonth(nextMonth);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goToPrevMonth}>Prev</button>
        <button onClick={goToNextMonth}>Next</button>
      </div>
      {renderCalendar()}
    </div>
  );
}

export default Calendar;
