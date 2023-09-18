"use client";
import { useThemeContext } from "@/context/theme.context";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";
export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="flex items-center 
    justify-center fixed bottom-5 right-5 bg-yellow-200 w-[3rem] h-[3rem] bg-opacity-80 
    backdrop-blur-[0.5rem] border border-white/40 rounded-full hover:scale-[1.15] active:scale-105 transition-all
    dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
