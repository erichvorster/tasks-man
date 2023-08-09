"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import React, { useState, useEffect } from "react";

const ThemeToggle = ({
  colour = "dark:bg-neutral-500 bg-neutral-300",
  on = false,
  onToggle = () => {},
  tabIndex = 0,
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOn, setIsOn] = useState(on);

  function toggle() {
    setIsOn(!isOn);
    //@ts-ignore
    onToggle(!isOn);
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function handleClick() {
    toggle();
  }

  function handleKeyDown({ key }:any) {
    if (key === "Enter") toggle();
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div
        role="checkbox"
        aria-checked={isOn ? "true" : "false"}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        className={`cursor-pointer w-12 h-6 ${colour} rounded-full relative px-1.5 flex mx-auto items-center${
          isOn ? "" : " justify-end"
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        />
        {isOn ? (
          <SunIcon className="h-4 w-4 text-white" />
        ) : (
          <MoonIcon className="h-4 w-4 text-white" />
        )}
      </div>
    </>
  );
};

export default ThemeToggle;
