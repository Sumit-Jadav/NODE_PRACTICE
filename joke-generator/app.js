import https from "https";
import chalk from "chalk";

const jokeGenerator = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https.get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      const joke = JSON.parse(data);

      console.log(`Randome joke of type : ${joke.type}`);
      console.log(chalk.red(`${joke.setup}`));
      console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
    });
    response.on("error", (err) => {
      console.log(`Error occure while showing joke : ${err.message}`);
    });
  });
};

jokeGenerator();
