import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todo = [];

const showMenu = () => {
  console.log("\n1) Input the task: ");
  console.log("2) View tasks ");
  console.log("3) Exit...");
  rl.question("Choose an option : ", handleInput);
};

const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter task :- ", (task) => {
      todo.push(task);
      console.log("Task added successfully... : ", task);
      showMenu();
    });
  } else if (option === "2") {
    console.log("\nYour todo list:-");

    todo.forEach((task, index) => {
      console.log(`${index + 1} : ${task}`);
    });
    showMenu();
  } else if (option === "3") {
    console.log("Goodbye...");
    rl.close();
  } else {
    console.log("Invalid Option ");
    showMenu();
  }
};

showMenu();
