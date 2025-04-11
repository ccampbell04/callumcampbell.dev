"use client";

import { useEditorContext } from "@/context/editor/useEditorContext";
import NavElement from "@/components/NavBar/NavElement";
import { useActiveContext } from "@/context/active/useActiveContext";
import styled from "styled-components";
import { usePreviousTabContext } from "@/context/previousTab/usePreviousTabContext";

const Navbar = styled.div`
  grid-area: navbar;
  color: white;
  padding: 1rem;
`;

const NavElementContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

export default function NavBar() {
  const editorContext = useEditorContext();
  const { editor, setEditor } = editorContext;
  const activeContext = useActiveContext();
  const { activeEditor, setActiveEditor } = activeContext;
  const PreviousTabContext = usePreviousTabContext();
  const { previousTab, setPreviousTab } = PreviousTabContext;

  const handleClick = (name: string) => {
    const updatedEditorState = editor.filter((file) => file !== name);

    if (editor.includes(name)) {
      setEditor(updatedEditorState);
    }
    if (activeEditor === name) {
      previousTab.delete(name);
      setPreviousTab(previousTab);

      const lastElement = Array.from(previousTab).pop();
      setActiveEditor(lastElement || undefined);
    }
  };

  return (
    <Navbar>
      <NavElementContainer>
        {editor.map((file: string) => {
          return <NavElement name={file} onClick={handleClick} key={file} />;
        })}
      </NavElementContainer>
    </Navbar>
  );
}
