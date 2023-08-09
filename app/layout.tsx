"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import MainNav from "../components/MainNav";
import Dashboard from "@/components/Dashboard";
import ProjectContext from "@/context/ProjectContext";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import MobileNav from "@/components/MobileNav";
import ProjectData from "@/data/data";
import { Project } from "@/data/data";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projects, setProjects] = useState<Project[]>(ProjectData);
  const [activeProject, setActiveProject] = useState({});
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-100/50 dark:bg-neutral-900`}
      >
        <ProjectContext.Provider
          value={{ projects, setProjects, activeProject, setActiveProject }}
        >
          <ThemeProvider attribute="class">
            <MobileNav />
            <MainNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
            <Dashboard toggleNav={toggleNav} setToggleNav={setToggleNav}>
              {children}
            </Dashboard>
          </ThemeProvider>
        </ProjectContext.Provider>
        <div id="overlay"></div>
        <div id="root"></div>
      </body>
    </html>
  );
}
