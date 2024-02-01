import React, { useState } from "react";
import GenerateFile from "./GenerateFile";
import folderData from "./data";

const { childFolder } = folderData;

const GenerateFolder = ({
  folder: value,
  margin = 0,
  nestedFolders,
  setNestedFolders,
}) => {
  const [hideFolders, setHideFolders] = useState(true);
  let myMargin = margin + 25;

  const handleDeleteFolder = (folder) => {
    const keys = Object.keys(childFolder);
    const newObject = keys
      .filter((key) => Number(key) !== folder)
      .reduce((obj, key) => {
        obj[key] = childFolder[key];
        return obj;
      }, {});

    setNestedFolders(newObject);
  };

  return value.map((folder, index) => {
    const child = nestedFolders[folder];
    const childFolderIds = child && child["folderIds"];
    const childFileIds = child && child["fileIds"];
    return (
      child && (
        <div key={index}>
          <div
            className="folder"
            style={{ marginLeft: myMargin }}
            onClick={(e) => setHideFolders((prev) => !prev)}
          >
            <p className="folderName">{child["name"]}</p>
            <span onClick={() => handleDeleteFolder(folder)}>Delete</span>
          </div>
          {!hideFolders && childFolderIds.length > 0 && (
            <GenerateFolder
              folder={childFolderIds}
              margin={myMargin}
              nestedFolders={nestedFolders}
              setNestedFolders={setNestedFolders}
            />
          )}
          {!hideFolders && childFileIds?.length > 0 && (
            <GenerateFile file={childFileIds} margin={myMargin} />
          )}
        </div>
      )
    );
  });
};

export default GenerateFolder;
