"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import MainNav from "../components/MainNav";
import Dashboard from "@/components/Dashboard";
import ProjectContext from "@/context/ProjectContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {





  const [projects, setProjects] = useState([]);

 

  console.log("projects", projects);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ProjectContext.Provider value={{ projects, setProjects}}>
          <MainNav projects={projects} setProjects={setProjects} />
          <Dashboard>{children}</Dashboard>
        </ProjectContext.Provider>
        <div id="overlay"></div>
        <div id="root"></div>
      </body>
    </html>
  );
}
