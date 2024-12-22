import readline from "readline";
import fs from "fs";
import path from "path";
import os from "os";

let counter = 1;

//! Creating folder in d drive
if (!fs.existsSync(path.join("d:", "Text files"))) {
  fs.mkdirSync(path.join("d:", "Text files"));
  //   console.log("created");
}

const dDrivePath = path.join("d:", "Text files", `file-${counter}.txt`);
const desktopPath = path.join(
  "c:",
  "Users",
  os.hostname().toLowerCase(),
  "Desktop",
  `file-${counter}.txt`
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showMenu = () => {
  console.log(`\nHey there ${os.hostname()} , What would you like to do ?`);
  console.log("1)Create a File");
  console.log("2)Read the File");
  console.log("3)Delete the File");
  console.log("4)Exit...");
  rl.question("Select one Option :- ", (opt) => {
    if (opt === "1") {
      createFile();
    } else if (opt === "2") {
      readFileFun();
    } else if (opt === "3") {
      deleteFile();
    } else if (opt === "4") {
      console.log("\nHave a good day ahead...");
    } else {
      console.log("Please select proper option  ");
      showMenu();
    }
  });
};
showMenu();

const createFile = () => {
  console.log('1)In  folder "Text files" in D drive');
  console.log("2) Desktop");
  rl.question("Where you want to create file??", (location) => {
    if (location === "1") {
      rl.question("Enter data :- ", (data) => {
        fs.writeFile(dDrivePath, data, (err) => {
          if (err) console.log("Error in file creation :- ", err);
          else console.log("Created successfully");
          showMenu();
        });
      });
    }
    if (location === "2") {
      rl.question("Enter data :- ", (data) => {
        fs.writeFile(desktopPath, data, "utf-8", (err) => {
          if (err) console.log("Error in file creation :- ", err.message);
          else {
            console.log("Created successfully");
            counter++;
          }
          showMenu();
        });
      });
    }
  });
};

const readFileFun = () => {
  console.log("Select location :-");
  console.log(`1) D drive Text File folder`);
  console.log(`2) Desktop`);
  rl.question("Select read location :-", (option) => {
    if (option === "1") {
      const path1 = path.join("d:", "Text files");
      printData(path1);
    } else if (option === "2") {
      const path2 = path.join(
        "c:",
        "Users",
        os.hostname().toLowerCase(),
        "Desktop"
      );
      printData(path2);
    } else {
      console.log(`invalid option !!!!!`);
      showMenu();
    }
  });
};

const printData = (filepath) => {
  //? using asynchronous way do not use because there will be chance of getting  output after the select fine name line
  //   fs.readdir(filepath, (err, files) => {
  //     if (err) {
  //       console.log(
  //         'Error occure while fetching the file names from  the folder "Text Files"',
  //         err.message
  //       );
  //     } else {
  //       console.log(files);
  //     }
  //   });

  console.log(fs.readdirSync(filepath, "utf-8"));
  //   console.log(fileNames);
  rl.question("Enter file name need to be read :- ", (data) => {
    const newpath = path.join(filepath, `${data}.txt`);
    if (fs.existsSync(newpath)) {
      const data = fs.readFileSync(newpath, "utf-8");
      console.log(data);
    } else {
      console.log(`No file exist named :- ${data}.txt`);
    }
  });
  showMenu();
};

const deleteFile = () => {
  console.log("Select location :-");
  console.log(`1) D drive Text File folder`);
  console.log(`2) Desktop`);
  rl.question("Where to delete?? : ", (data) => {
    if (data === "1") {
      const path1 = path.join("d:", "Text files");
      delFile(path1);
    } else if (data === "2") {
      const path2 = path.join(
        "c:",
        "Users",
        `${os.hostname().toLowerCase()}`,
        "Desktop"
      );
      delFile(path2);
    }
  });
};

const delFile = (filepath) => {
  console.log(fs.readdirSync(filepath, "utf-8"));
  rl.question("Enter file name which you want to delete :- ", (data) => {
    const newPath = path.join(filepath, `${data}.txt`);
    if (fs.existsSync(newPath)) {
      fs.unlinkSync(newPath);
      console.log("Deleted sucessfully");
    } else {
      console.log("error while deleteing the file");
    }
    showMenu();
  });
};
