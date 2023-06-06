import React, { ReactNode } from 'react';

type DashboardProps = {
  children: ReactNode;
};

const Dashboard = ({ children, toggleNav, setToggleNav }: DashboardProps) => {
  return ( 
    <div className={`absolute right-0 top-0 bottom-0 ${!toggleNav ? "left-20" : "left-72"} h-screen mx-12 pt-12 transition-all ease-in-out`}>{children}</div>
  );
};

export default Dashboard;