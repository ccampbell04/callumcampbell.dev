"use client";

import { useEditorContext } from "@/context/editor/useEditorContext";

export default function File({ name }: { name: string }) {
  const editorContext = useEditorContext();
  const { editorState, setEditorState } = editorContext;

  const handleClick = () => {
    if (!editorState.includes(name)) {
      setEditorState([...editorState, name]);
    }
  };

  return (
    <div className="file">
      <button onClick={handleClick}>{name}</button>
    </div>
  );
}
