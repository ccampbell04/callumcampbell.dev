"use client";

import fileConstants from "@/util/fileConstants";
import File from "@/components/files/File/File";
import { useState } from "react";

export default function Directory({
  name,
  files,
}: {
  name: string;
  files: string[];
}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`${name}directory`}>
      <button onClick={handleClick}>{name}</button>
      {isVisible && (
        <div className={`${name}nested-files`}>
          {files.map((file: string) => {
            if (file.endsWith("/")) {
              const nestedFiles = fileConstants[file];
              return <Directory name={file} files={nestedFiles} key={file} />;
            }
            return <File key={file} name={file} />;
          })}
        </div>
      )}
    </div>
  );
}
