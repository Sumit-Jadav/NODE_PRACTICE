const path = require("path");
const fs = require("fs");
//* const fs = require("fs/promises");

//! This method is used insted  of fs.promises.method().then().catch()

const currentPath = path.join(__dirname, "async_await.txt");
const newPath = path.join(__dirname, "upadted_name.txt");

const readDir = async () => {
  try {
    const res = await fs.promises.readdir(__dirname);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

const createFile = async (filePath) => {
  try {
    await fs.promises.writeFile(filePath, "This is initial data", "utf-8");
    console.log("File created successful");
  } catch (error) {
    console.log(error.message);
  }
};

const readFiledata = async (filePath) => {
  try {
    const res = await fs.promises.readFile(filePath, "utf-8");
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

const updateFile = async (filePath) => {
  try {
    await fs.promises.appendFile(filePath, "\nThis is updated data", "utf-8");
    console.log("file updated successfully");
  } catch (error) {
    console.log(error.message);
  }
};

const renameFile = async (current, newPath) => {
  try {
    await fs.promises.rename(current, newPath);
    console.log("rename is done");
  } catch (error) {
    console.log(error);
  }
};

const deleteFile = async (path) => {
  try {
    await fs.promises.unlink(path);
    console.log("deleted");
  } catch (error) {
    console.log(error.message);
  }
};

// readDir();
// createFile(currentPath);
// readFiledata(currentPath);
// updateFile(currentPath);

// renameFile(currentPath,newPath);
// deleteFile(newPath);
