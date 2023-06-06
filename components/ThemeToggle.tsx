"use client"

import { useTheme } from "next-themes";

import React, {useState, useEffect} from "react";

const ThemeToggle = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div>{theme}</div>

      <button className="bg-white dark:bg-black" onClick={() => setTheme("light")}>Light mode</button>
      <button className="bg-black- dark:bg-white" onClick={() => setTheme("dark")}>Dark mode</button>
    </>
  );
};

export default ThemeToggle;
