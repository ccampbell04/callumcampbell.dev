'use client'

import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface ActiveContextType {
   activeEditor: string | undefined; 
   setActiveEditor: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ActiveContext = createContext<ActiveContextType | null>(null);

export const ActiveProvider = ({ children }: { children: ReactNode }) => {
   const [activeEditor, setActiveEditor] = useState<string | undefined>(undefined);
   return (
      <ActiveContext.Provider value={{ activeEditor, setActiveEditor }}>
         {children}
      </ActiveContext.Provider>
   )
}

export const useActive = () => useContext(ActiveContext);