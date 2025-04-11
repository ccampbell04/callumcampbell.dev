"use client";

import { useEditorContext } from "@/context/editor/useEditorContext";
import NavElement from "@/components/NavBar/NavElement";
import { useActiveContext } from "@/context/active/useActiveContext";
import styles from "./NavBar.module.css"; // Import styles from a CSS module

export default function NavBar() {
  const editorContext = useEditorContext();
  const { editorState, setEditorState } = editorContext;
  const activeContext = useActiveContext();
  const { activeEditor, setActiveEditor } = activeContext;

  const handleClick = (name: string) => {
    const updatedEditorState = editorState.filter((file) => file !== name);
    if (editorState.includes(name)) {
      setEditorState(updatedEditorState);
    }
    if (activeEditor === name) {
      setActiveEditor(updatedEditorState[0]);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navElement}>
        {editorState.map((file: string) => {
          return <NavElement name={file} onClick={handleClick} key={file} />;
        })}
      </div>
    </div>
  );
}
