import { createServer } from "http";
import { parse } from "url";
import { readFile, readFileSync } from "fs";
var port = 8080;
var page404 = readFileSync("./404.html");
var server = createServer(function (req, res) {
    var q = parse(req.url, true);
    var filename = "";
    if (q.pathname === "/") {
        filename = "./index.html";
    }
    else {
        filename = "." + q.pathname;
    }
    readFile(filename, function (err, data) {
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
server.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port, "/"));
});
