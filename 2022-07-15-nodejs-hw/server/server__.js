const http = require('node:http');
const fs = require('node:fs');

function readServerFile(filePath, contentType, req, res) {
    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end(error.code);
        } 
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('/api/v1/user/')) {
        console.log('kuku user data');
    }
    else if (req.url === '/') {
        console.log('index');
        readServerFile('../static/index.html', 'text/html', req, res);
    }
    else if (req.url === '/api/v1/text') {
        console.log('text');
        readServerFile('./sample.txt', 'text/plain', req, res);
    }
    else if (req.url === '/api/v1/users') {
        console.log('users');
        readServerFile('./users.json', 'application/json', req, res);
    }
    else if (req.url === '/api/v1/posts') {
        console.log('posts');
        readServerFile('./posts.json', 'application/json', req, res);
    }
    else {
        console.log('404');
        readServerFile('../static/404.html', 'text/html', req, res);
    }

}).listen(3000);