import { FileTypeHandler } from "./fileTypes/FileTypeHandler";
import styles from "./Editor.module.css";

export function Editor({ file }: { file: string }) {
  const fileType = file.split(".").pop()?.toLowerCase() || "404";

  return (
    <div className={styles.editor}>
      <h1>Editor</h1>
      <p>Editing file: {file}</p>
      <p>File type: {fileType}</p>
      <FileTypeHandler extension={fileType} />
    </div>
  );
}
