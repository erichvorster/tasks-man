import React, { ReactNode } from "react";

type DashboardProps = {
  children: ReactNode;
};

const Dashboard = ({ children, toggleNav, setToggleNav }: DashboardProps) => {
  return (
    <div
      className={`absolute right-0 top-0 bottom-0 ${
        !toggleNav ? "md:left-20" : "md:left-72"
      } left-0 h-screen md:overflow-hidden pt-20 md:pt-3 mx-4 md:mx-3 transition-all duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default Dashboard;
