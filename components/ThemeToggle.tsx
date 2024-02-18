"use client";
import React from "react";
import Image from "next/image";

export const ThemeToggle = () => {
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }

  return (
    <div
      onClick={toggleDarkMode}
      className="md:fixed top-4 right-4 cursor-pointer shadow-xl rounded-full p-2 bg-purple-100 w-max"
    >
      <Image
        src="/assets/icons/dark-mode.svg"
        alt="image"
        width={24}
        height={24}
      />
    </div>
  );
};
