"use client"

import React, { ReactNode, useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types"

type ActiveSectionContextProviderProps = {
  children: ReactNode;
};
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}
export const ActiveSectionConext = createContext<ActiveSectionContextType | null>(null )

export default function ActiveSectionContextProvider({children }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); //This helps us disable the observer temporarily after clicking on nav. (observer is always on so scrolling to section triggers it)
    return (
      <ActiveSectionConext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
        {children}
      </ActiveSectionConext.Provider>
    );
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionConext);

    if(context === null){
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}