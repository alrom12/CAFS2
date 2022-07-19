const os = require('os');
const express = require('express');
const app = express();
const port = 3000;

app.get('/os', (req, res) => {
    res.send(JSON.stringify(os.version()));
});

app.get('/cpu', (req, res) => {
    res.send(JSON.stringify(os.cpus()));
});

app.get('/ram', (req, res) => {
    res.send(JSON.stringify(os.totalmem()));
});

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});