const rootFolder = [
  {
    id: "1",
    name: "root",
    type: "folder",
  },
];

const childFolder = {
  "1": {
    name: "Nikita",
    folderIds: [4],
    fileIds: [6, 7],
  },
  "3": {
    name: "khushi",
    folderIds: [8, 9],
    fileIds: [10, 11],
  },
  "4": {
    name: "Todo",
    folderIds: [5],
    fileIds: [12, 13],
  },
  "5": {
    name: "Secret",
    folderIds: [],
    fileIds: [13],
  },
  "8": {
    name: "Confidentail",
    folderIds: [],
    fileIds: [],
  },
  "9": {
    name: "Beta",
    folderIds: [],
    fileIds: [],
  },
  "6": {
    name: "Product.pdf",
    folderIds: [],
    fileIds: [],
  },
  "7": {
    name: "Recipe.txt",
    folderIds: [],
    fileIds: [],
  },
  "10": {
    name: "movie.mp4",
    folderIds: [],
    fileIds: [],
  },
  "11": {
    name: "ReactTut.pdf",
    folderIds: [],
    fileIds: [],
  },
  "12": {
    name: "todoList.txt",
    folderIds: [],
    fileIds: [],
  },
  "13": {
    name: "Revise.pdf",
    folderIds: [],
    fileIds: [],
  },
};

export default {
  rootFolder,
  childFolder,
};
