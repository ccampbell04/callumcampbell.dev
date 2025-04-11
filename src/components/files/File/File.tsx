"use client";

import { useActiveContext } from "@/context/active/useActiveContext";
import { useEditorContext } from "@/context/editor/useEditorContext";
import { usePreviousTabContext } from "@/context/previousTab/usePreviousTabContext";

export default function File({ name }: { name: string }) {
  const editorContext = useEditorContext();
  const { editor, setEditor } = editorContext;
  const activeContext = useActiveContext();
  const { setActiveEditor } = activeContext;
  const PreviousTabContext = usePreviousTabContext();
  const { previousTab, setPreviousTab } = PreviousTabContext;

  const handleClick = () => {
    if (!editor.includes(name)) {
      setEditor([...editor, name]);
    }
    setActiveEditor(name);
    previousTab.add(name);
    setPreviousTab(previousTab);
  };

  return (
    <div className="file">
      <button onClick={handleClick}>{name}</button>
    </div>
  );
}
