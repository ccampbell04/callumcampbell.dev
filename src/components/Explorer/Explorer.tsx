import fileConstants from "@/util/fileConstants";
import Directory from "@/components/files/Directory/Directory";
import styled from "styled-components";

const ExplorerContainer = styled.div`
  grid-area: explorer;
  padding: 1rem;
`;

export default function Explorer() {
  const files = fileConstants["src/"];
  const src = "src/";

  return (
    <ExplorerContainer className="explorer">
      <Directory name={src} files={files} />
    </ExplorerContainer>
  );
}
