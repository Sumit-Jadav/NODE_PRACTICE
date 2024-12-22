const path = require("path");
const fs = require("fs");

const currentPath = path.join(__dirname, "promise.txt");

//! To create a file
//? fs.promises.writeFile(path,data,option).then(callback).catch(callback)

// fs.promises
//   .writeFile(currentPath, "this is data", "utf-8")
//   .then(() => {
//     console.log("created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! To read the file
// fs.promises
//   .readFile(currentPath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//! To update a file

// fs.promises
//   .appendFile(currentPath, "\nthis is updated data", "utf-8")
//   .then(() => console.log("updated successfully"))
//   .catch((err) => console.log(err));

//! Rename the file
const newPath = path.join(__dirname, "updated.txt");
// fs.promises
//   .rename(currentPath, newPath)
//   .then(() => console.log("Rename sucess"))
//   .catch((err) => console.log("Error occure :- ", err));

//! Delete file
// fs.promises
//   .unlink(newPath)
//   .then(() => console.log("deleted"))
//   .catch((err) => console.log("Error occure while deleting ", err));

//! If we use fs/promises in require section then we do not need to write fs.promises every time

//! get all file name in the directory
fs.promises
  .readdir(__dirname, "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
