const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "html");
    res.write("Hello There!!!! this is after update");
    res.end();
  }
  if (req.url === "/course") {
    res.setHeader("Content-Type", "text/html"); //? to tell our server what type of respone it is
    res.write(`<h1>Courses are:<br>
        1) HTML <br>
        2) CSS <br>
        3) JavaScript <br>
        4) Python</h1>`);

    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
