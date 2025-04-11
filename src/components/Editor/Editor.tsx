import { FileTypeHandler } from "./fileTypes/FileTypeHandler";
import styled from "styled-components";

const EditorContainer = styled.div`
  grid-area: editor;
  background-color: #1e1e1e;
  padding: 1rem;
`;

export function Editor({ file }: { file: string | undefined }) {
  if (!file) {
    return <EditorContainer>No file selected</EditorContainer>;
  }
  
  const fileType = file.split(".").pop()?.toLowerCase() || "404";

  return (
    <EditorContainer>
      <h1>Editor</h1>
      <p>Editing file: {file}</p>
      <p>File type: {fileType}</p>
      <FileTypeHandler extension={fileType} />
    </EditorContainer>
  );
}
