import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import crypto from "crypto";
import dotenv from "dotenv";
import { writeFile } from "fs/promises";

dotenv.config();

const PORT = 5000;
const DATA_FILE = path.join("URL_SHORTNER", "data", "links.json");

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

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return data ? JSON.parse(data) : {};
  } catch (error) {
    //* ENOENT = Error No Entry :- There is no files through which data needs to be read
    if (error.code === "ENOENT") {
      // await mkdir(path.dirname(DATA_FILE), { recursive: true });
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links));
};

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      return serveFile(
        res,
        path.join("URL_SHORTNER", "public", "index.html"),
        "text/html"
      );
    }
    //* When html file is given as response then due to <link stylesheet> get request to the server for path /style.css is generated so in else if there is path = "/style.css"
    else if (req.url === "/style.css") {
      return serveFile(
        res,
        path.join("URL_SHORTNER", "public", "style.css"),
        "text/css"
      );
    } else if (req.url === "/links") {
      const links = await loadLinks();
      res.writeHead(200, { "content-type": "application/json" });
      return res.end(JSON.stringify(links));
    } else {
      const links = await loadLinks();
      const shortCode = req.url.slice(1);
      console.log("red.", req.url);
      if (links[shortCode]) {
        res.writeHead(302, { location: links[shortCode] });
        return res.end();
      }

      res.writeHead(404, { "content-type": "text/plain" });
      return res.end("URL not found");
    }
  }

  if (req.method === "POST" && req.url === "/shorten") {
    const links = await loadLinks();
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      const { url, shortcode } = JSON.parse(body);

      if (!url) {
        res.writeHead(400, { "content-type": "text/plain" });
        return res.end("URL is required");
      }
      //* Cheking if there is no repeatation of shortcode
      const finalShortCode = shortcode || crypto.randomBytes(4).toString("hex");
      if (links[finalShortCode]) {
        res.writeHead(400, { "content-type": "text/plain" });
        return res.end("short code already exist. Please choose another one.");
      }

      links[finalShortCode] = url;
      await saveLinks(links);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ sucess: true, shortCode: finalShortCode }));
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
