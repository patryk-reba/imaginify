"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark", isDarkMode);
  }, []);

  function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", isDark.toString());
  }

  return (
    <div
      onClick={toggleDarkMode}
      className={cn(
        "md:fixed top-4 right-4 cursor-pointer shadow-xl rounded-full p-2 bg-accent w-max"
      )}
    >
      <Image
        src="/assets/icons/dark-mode.svg"
        className="bg-gray-200 rounded-full"
        alt="Toggle Dark Mode"
        width={24}
        height={24}
      />
    </div>
  );
};
