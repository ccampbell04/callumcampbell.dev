import styles from "./NavElement.module.css"; 
import { useActiveContext } from "@/context/active/useActiveContext";

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
    <div className={styles.navElement}>
      <button onClick={handleClick}>{name}</button>
      <button
        className="nav-button"
        onClick={() => {
          onClick(name);
        }}
      >
        &times;
      </button>
    </div>
  );
}
