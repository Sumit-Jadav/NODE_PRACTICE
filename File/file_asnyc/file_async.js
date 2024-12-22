const fs = require("fs");

const path = require("path");

const currentPath = path.join(__dirname, "async.txt");

//! To create path

//? Syntax :- writeFile(filepath , data , options , callback )
// fs.writeFile(currentPath, "This is data", (err) => {
//   if (err) {
//     console.log("Error occure");
//   } else {
//     console.log("File created successfully");
//   }
// });

//! To read data from the file

// fs.readFile(currentPath, "utf-8", (err, data) => {
//   if (err) console.log("Some error ocuure");
//   else console.log(data);
// });

//! To delete file

fs.unlink(currentPath, (err) => {
  if (err) {
    console.log("Error occure");
  } else console.log("Deleted successfully");
});

//! To update file

// fs.appendFile(currentPath, "\nThis is new data", "utf-8", (err) => {
//   if (err) console.log("Error occure", err);
//   else console.log("Updated successful");
// });

//! rename File
// const newPath = path.join(__dirname, "updated.txt");
// fs.rename(currentPath, newPath, (err) => {
//   if (err) {
//     console.log("Error occure");
//   }
// });
