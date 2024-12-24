import readline from "readline/promises";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${process.env.API_KEY_WEATHER}&units=metric`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found. Please check city name.");
    }
    const weatherdata = await response.json();
    console.log("\nWeather information...");
    console.log(`City :-${weatherdata.name}`);
    console.log(`Temperature :- ${weatherdata.main.temp}°C`);
    console.log(`Description :- ${weatherdata.weather[0].description}`);
    console.log(`Humidity :- ${weatherdata.main.humidity}%`);
    console.log(`Wind speed :- ${weatherdata.wind.speed} m/s`);
  } catch (error) {
    console.log(error.message);
  }
};

const city = await rl.question("Enter a city name to get its weather:- ");
await getWeather(city);
rl.close();
