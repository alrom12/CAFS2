const http = require('http');
const fs = require('fs');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);


http.createServer(function (req, res) {
    fs.readFile('./server/users.json', function (err, data) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        res.end();
    });
}).listen(8080);