"use client"
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

/**
 * ThemeContextProps
 */
type ThemeContextType = {
  theme: Theme;
  toggleTheme: ()=>void;
};

/**
 * ThemeContextProviderProps
 */
type ThemeContextProviderProps = {
  children: ReactNode;
};
const ThemeContext = createContext<ThemeContextType | null>(null);
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
    if (window.matchMedia("prefer-color-scheme: dark").matches) {
      setTheme("dark");
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw "useThemeContext must be used within a ThemeContextProvider";
  }
  return context;
}
