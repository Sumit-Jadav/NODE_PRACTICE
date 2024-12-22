writeFile(currentPath, "This is data", (err) => {
  if (err) {
    console.log("Error occure");
  } else {
    console.log("File created successfully");
  }
});