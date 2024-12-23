import https from "https";
import Readline from "readline";
import chalk from "chalk";

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apikey = "2f2d2ce2903319a21a25166e";
const url = `https://v6.exchangerate-api.com/v6/2f2d2ce2903319a21a25166e/latest/USD`;

const convertCurrency = (amount, rate) => (amount * rate).toFixed(2);

https.get(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    rl.question("Enter amount in USD :- ", (amount) => {
      rl.question(
        "Enter targeted currency (eg. INR , EUR ...) :- ",
        (targetCurrency) => {
          const rate = rates[targetCurrency.toUpperCase()];

          if (rate) {
            console.log(
              chalk.bgRed(
                `${amount} USD is approximately ${convertCurrency(
                  amount,
                  rate
                )}${targetCurrency.toUpperCase()}`
              )
            );
          } else {
            console.log(`Invalid currency code`);
          }
          rl.close();
        }
      );
    });
  });
});
