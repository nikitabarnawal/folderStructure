import React, { useState } from "react";
import GenerateFolder from "./GenerateFolder";
import GenerateFile from "./GenerateFile";
import folderData from "./data";

const { rootFolder, childFolder } = folderData;

const FolderStructure = () => {
  const [hideFolders, setHideFolders] = useState(true);
  const [nestedFolders, setNestedFolders] = useState(childFolder);
  return (
    <div className="struct">
      {rootFolder.map((folder, index) => {
        const child = nestedFolders[folder.id];
        const childFolderIds = child && child["folderIds"];
        const childFileIds = child && child["fileIds"];

        return (
          <div key={index}>
            <div
              className={folder.type}
              onClick={(e) => setHideFolders((prev) => !prev)}
            >
              <p className="folderName">{folder.name}</p>
            </div>
            {!hideFolders && childFolderIds?.length > 0 && (
              <GenerateFolder
                folder={childFolderIds}
                nestedFolders={nestedFolders}
                setNestedFolders={setNestedFolders}
              />
            )}
            {!hideFolders && childFileIds?.length > 0 && (
              <GenerateFile file={childFileIds} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FolderStructure;
