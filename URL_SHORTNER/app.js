import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 : Page not found");
  }
};

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      return serveFile(res, path.join("public", "index.html"), "text/html");
    }
    //* When html file is given as response then due to <link stylesheet> get request to the server for path /style.css is generated so in else if there is path = "/style.css"
    else if (req.method === "GET") {
      if (req.url === "/style.css") {
        return serveFile(res, path.join("public", "style.css"), "text/css");
      }
    }
  }
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
