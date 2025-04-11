"use client";

import { useActiveContext } from "@/context/active/useActiveContext";
import { useEditorContext } from "@/context/editor/useEditorContext";

export default function File({ name }: { name: string }) {
  const editorContext = useEditorContext();
  const { editorState, setEditorState } = editorContext;
  const activeContext = useActiveContext();
  const { setActiveEditor } = activeContext;

  const handleClick = () => {
    if (!editorState.includes(name)) {
      setEditorState([...editorState, name]);
    }
    setActiveEditor(name);
  };

  return (
    <div className="file">
      <button onClick={handleClick}>{name}</button>
    </div>
  );
}
