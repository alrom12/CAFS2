const myArgs = process.argv.slice(2);
if (myArgs.length === 2) {
    const fs = require('fs');
    fs.writeFile(myArgs[0], myArgs[1], (err) => {
        if (err) {
            throw err;
        }
        console.log('File is created successfully.');
    });
} else {
    console.log('Please provide two arguments: app.js <fileName> <text>');
}