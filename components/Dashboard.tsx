import React, { ReactNode } from "react";

type DashboardProps = {
  children: ReactNode;
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dashboard = ({ children, toggleNav, setToggleNav }: DashboardProps) => {
  return (
    <div
      className={`absolute right-0 top-0 bottom-0 ${
        !toggleNav ? "md:left-20" : "md:left-72"
      } left-0 h-screen md:overflow-hidden pt-20 md:pt-3 mx-4 md:mx-3 transition-all duration-300 ease-in-out`}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
        //@ts-ignore
          ? React.cloneElement(child, { setToggleNav })
          : child
      )}
    </div>
  );
};

export default Dashboard;
