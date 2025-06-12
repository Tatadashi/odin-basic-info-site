import express from 'express';
import { readFile } from "fs";

const app = express();
app.get('/', (req, res) => {
    readFile('./index.html', (err, data) => {
        if (err) throw err;
        res.writeHead('200', { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

app.get('/about', (req, res) => {
    readFile('./about.html', (err, data) => {
        if (err) throw err;
        res.writeHead('200', { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

app.get('/contact-me', (req, res) => {
    readFile('./contact-me.html', (err, data) => {
        if (err) throw err;
        res.writeHead('200', { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

app.get('/{*splat}', (req, res) => {
    readFile('./404.html', (err, data) => {
        if (err) throw err;
        res.writeHead('404', { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
