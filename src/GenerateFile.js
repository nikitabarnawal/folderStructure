import React from "react";
import folderData from "./data";

const { childFolder } = folderData;

const GenerateFile = ({ file: value, margin = 0 }) => {
  let myMargin = margin + 25;
  return value.map((file, index) => {
    const child = childFolder[file];
    return (
      <div key={index} className="file" style={{ marginLeft: myMargin }}>
        <p>{child["name"]}</p>
      </div>
    );
  });
};

export default GenerateFile;
