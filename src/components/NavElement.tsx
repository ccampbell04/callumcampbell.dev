import { useActiveContext } from "@/context/active/useActiveContext";

export default function NavElement({
  name,
  onClick,
}: {
  name: string;
  onClick: (name: string) => void;
}) {
  const activeContext = useActiveContext();
  const { activeEditor, setActiveEditor } = activeContext;
  const handleClick = () => {
    if (activeEditor !== name) {
      setActiveEditor(name);
    }
  };
  return (
    <>
      <button onClick={handleClick}>
        {name}
        <button
          className="nav-button"
          onClick={() => {
            onClick(name);
          }}
        >
          &times;
        </button>
      </button>
    </>
  );
}
