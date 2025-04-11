"use client";

import { useEditorContext } from "@/context/editor/useEditorContext";
import NavElement from "@/components/NavBar/NavElement";
import { useActiveContext } from "@/context/active/useActiveContext";
import styled from "styled-components";

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
    <Navbar>
      <NavElementContainer>
        {editorState.map((file: string) => {
          return <NavElement name={file} onClick={handleClick} key={file} />;
        })}
      </NavElementContainer>
    </Navbar>
  );
}
