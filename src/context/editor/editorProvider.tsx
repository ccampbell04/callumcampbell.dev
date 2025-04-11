"use client";

import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface EditorContextType {
  editor: string[];
  setEditor: React.Dispatch<React.SetStateAction<string[]>>;
}

const EditorContext = createContext<EditorContextType | null>(null);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [editor, setEditor] = useState(["README.md"]);
  return (
    <EditorContext.Provider value={{ editor, setEditor }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);
