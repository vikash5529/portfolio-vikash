import React, { ReactNode, createContext, useState } from "react";
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
};
/**
 * Section Name 
 */
type SectionName = (typeof links)[number]["name"];
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

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
