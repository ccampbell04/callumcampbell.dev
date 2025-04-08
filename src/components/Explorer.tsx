import fileConstants from "@/util/fileConstants";
import File from "@/components/files/File"; 
import Directory from "./files/Directory";

export default function Explorer() {
  const files = fileConstants["src/"];
  const src = "src/";

  return (
    <div className="explorer">
      <Directory name={src} files={files} />
    </div>
  );
}
