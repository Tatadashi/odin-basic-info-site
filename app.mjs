import express from 'express';
import { readFile } from "fs";
var app = express();
app.get('/', function (req, res) {
    readFile('./index.html', function (err, data) {
        if (err)
            throw err;
        res.writeHead('200', { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});
app.get('/about', function (req, res) {
    readFile('./about.html', function (err, data) {
        if (err)
            throw err;
        res.writeHead('200', { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});
app.get('/contact-me', function (req, res) {
    readFile('./contact-me.html', function (err, data) {
        if (err)
            throw err;
        res.writeHead('200', { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});
app.get('/{*splat}', function (req, res) {
    readFile('./404.html', function (err, data) {
        if (err)
            throw err;
        res.writeHead('404', { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});
var PORT = 8080;
app.listen(PORT, function () {
    console.log("Server is running at http://localhost:".concat(PORT));
});
