"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { links } from "@/lib/data";

/**
 * ActiveSectionContextProviderProps
 */
type ActiveSectionContextProviderProps = {
  children: ReactNode;
};

/**
 * ActiveSectionContextProps
 */
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClicked: number;
  setTimeOfLastClicked: React.Dispatch<React.SetStateAction<number>>;
};
/**
 * Section Name
 */
export type SectionName = (typeof links)[number]["name"];
/**
 * ActiveSectionContext
 */
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClicked, setTimeOfLastClicked] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, timeOfLastClicked, setTimeOfLastClicked }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw "useActiveSectionContext must be used within an ActiveSectionContextProvider";
  }
  return context;
}
