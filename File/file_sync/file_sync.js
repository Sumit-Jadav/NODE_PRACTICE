const fs = require("fs");
const path = require("path");

const currentPath = path.join(__dirname, "sync.txt");

//! To create new file if not created ans if it is already exist then it will rewrite the entire file with data

//? writefilesync(filepath , data , options)
fs.writeFileSync(currentPath, "This is data", "utf-8");

///! To read file content

//? readFileSync(filepath , options)
//* If there is no option specified then daata will be in buffer format
const data = fs.readFileSync(currentPath, "utf-8");
// const data = fs.readFileSync(currentPath).toString();
console.log(data);

//! To update add new data in file
// fs.appendFileSync(currentPath, "\nthis is new data", "utf-8");

// console.log(fs.readFileSync(currentPath, "utf-8"));

//! To rename file

const newFilePath = path.join(__dirname, "uodate_sync.txt");
fs.renameSync(currentPath, newFilePath);

//! To delete file
fs.unlinkSync(newFilePath);
