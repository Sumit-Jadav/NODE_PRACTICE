import express from "express";
import { PORT } from "./env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
