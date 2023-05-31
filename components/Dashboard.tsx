import React, { ReactNode } from 'react';

type DashboardProps = {
  children: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="absolute right-0 top-0 bottom-0 left-72 m-12 ">{children}</div>
  );
};

export default Dashboard;