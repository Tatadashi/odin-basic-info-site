import { createServer } from "http";
import { parse } from "url";
import { readFile, readFileSync } from "fs";

const port = 8080;
const page404 = readFileSync("./404.html");

const server = createServer((req, res) => {
  let q = parse(req.url, true);
  let filename: string = "";
  if (q.pathname === "/") {
    filename = "./index.html";
  } else {
    filename = "." + q.pathname;
  }

  readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(page404);
      return res.end();
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
