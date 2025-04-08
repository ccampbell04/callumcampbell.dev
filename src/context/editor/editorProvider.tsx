'use client'

import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface EditorContextType {
   editorState: string[];
   setEditorState: React.Dispatch<React.SetStateAction<string[]>>;
}

const EditorContext = createContext<EditorContextType | null>(null);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
   const [editorState, setEditorState] = useState(["README.md"]);
   return (
      <EditorContext.Provider value={{ editorState, setEditorState }}>
         {children}
      </EditorContext.Provider>
   )
}

export const useEditor = () => useContext(EditorContext);