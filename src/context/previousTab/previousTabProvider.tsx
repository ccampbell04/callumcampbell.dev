'use client'

import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface PreviousTabContextType {
   previousTab: Set<string>;
   setPreviousTab: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const PreviousTabContext = createContext<PreviousTabContextType | null>(null);

export const PreviousTabProvider = ({ children }: { children: ReactNode }) => {
   const [previousTab, setPreviousTab] = useState<Set<string>>(new Set(["README.md"]));
   return (
      <PreviousTabContext.Provider value={{ previousTab, setPreviousTab }}>
         {children}
      </PreviousTabContext.Provider>
   )
}

export const usePreviousTab = () => useContext(PreviousTabContext);