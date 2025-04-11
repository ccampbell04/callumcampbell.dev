import { useActiveContext } from "@/context/active/useActiveContext";
import styled from "styled-components";

const StyledNavElement = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
  padding: 0.5rem 1rem;
`;

export default function NavElement({
  name,
  onClick,
}: {
  name: string;
  onClick: (name: string) => void;
}) {
  const { activeEditor, setActiveEditor } = useActiveContext();

  const handleClick = () => {
    if (activeEditor !== name) {
      setActiveEditor(name);
    }
  };

  return (
    <StyledNavElement>
      <button onClick={handleClick}>{name}</button>
      <button
        className="nav-button"
        onClick={() => {
          onClick(name);
        }}
      >
        &times;
      </button>
    </StyledNavElement>
  );
}
