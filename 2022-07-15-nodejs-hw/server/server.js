// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.txt': 'text/plain',
    '.xml': 'text/xml'
};
const PUBLIC = './public';

http.createServer((request, response) => {
    console.log('request: ', request.url);
    let filePath = request.url;
    if (filePath === '/') {
        filePath = `${PUBLIC}/index.html`;
    } else if (filePath === '/app.js') {
        filePath = `${PUBLIC}${filePath}`;
    } else if (filePath === '/api/v1/message') {
        filePath = './sample.txt';
    } else if (filePath.includes('/api/v1/user')) {
        filePath = './user.json';
    } else if (filePath.includes('/api/v1/users')) {
        filePath = './users.json';
    } else if (filePath.includes('/api/v1/posts')) {
        filePath = './posts.json';
    } else {
        console.log('kuku 404');
        filePath = `${PUBLIC}/404.html`;
    }

    let contentType = mimeTypes[path.extname(filePath)];

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code === 'ENOENT') {
                fs.readFile('${PUBLIC}/404.html', (error, content) => {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content);
                });
            } else {
                response.writeHead(500);
                response.end(error.code);
            }
        } else {
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content);
        }
    });
}).listen(3000);