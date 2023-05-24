"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import MainNav from "../components/MainNav";
import Dashboard from "@/components/Dashboard";
import ProjectContext from "@/context/ProjectContext";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight:'400' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projects, setProjects] = useState(() => {
    return JSON.parse(localStorage.getItem("projects")) || []
  })

  console.log(projects);

  
  const [activeProject, setActiveProject] = useState({});

console.log(activeProject)

  useEffect(() => {
    if (projects.length > 0) {localStorage.setItem("projects", JSON.stringify(projects))}
  }, [projects])

  // useEffect(() => {
  //   // Retrieve projects from local storage on component mount
  //   const storedProjects = JSON.parse(localStorage.getItem("projects"));
  //   if (storedProjects) {
  //     setProjects(storedProjects);
  //   }
  // }, []);
  // useEffect(() => {
  //   // Save projects to local storage when it changes
  //   localStorage.setItem("projects", JSON.stringify(projects));
  // }, [projects]);

  // useEffect(() => {
  //   // Retrieve projects from local storage on component mount
  //   const storedProjects = JSON.parse(localStorage.getItem("projects"));
  //   if (storedProjects) {
  //     setProjects(storedProjects);
  //   }
  // }, []);



  return (
    <html lang="en">
      <body className={poppins.className}>
        <ProjectContext.Provider
          value={{ projects, setProjects, activeProject, setActiveProject }}
        >
          <MainNav />
          <Dashboard>{children}</Dashboard>
        </ProjectContext.Provider>
        <div id="overlay"></div>
        <div id="root"></div>
      </body>
    </html>
  );
}
