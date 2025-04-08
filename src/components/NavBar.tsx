"use client";

import { useEditorContext } from "@/context/editor/useEditorContext";
import NavElement from "./NavElement";

export default function NavBar() {
  const editorContext = useEditorContext();
  const { editorState, setEditorState } = editorContext;

  const handleClick = (name: string) => {
    if (editorState.includes(name)) {
      setEditorState(editorState.filter((file) => file !== name));
    }
  };

  return (
    <>
      {editorState.map((file: string) => {
        return <NavElement name={file} onClick={handleClick} key={file} />;
      })}
    </>
  );
}
