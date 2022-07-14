// connect the files system

// import * as fs from 'fs';

const fs = require('fs');
const fsPromisable = require('fs/promises');

// console.log('fs', fs);
let testFolder = './';

function showFilesRecursiveAsync(path) {
    fs.readdir(path, {
        withFileTypes: true
    }, (err, files) => {
        files.forEach(file => {
            if (file.isFile()) {
                console.log(file + file.name);
            } else {
                showFilesRecursiveAsync(path + '/' + file.name);
            }
        });
    });
}

showFilesRecursiveAsync('./');

async function getFilesRecursiveAsync(path) {
    let files = await fsPromisable.readdir(path, {
        withFileTypes: true
    });

    let paths = [];

    for (let file of files) {
        const currentPath = _path.join(path, file.name);
        if (file.isFile()) {
            path.push(currentPath)
        } else {
            path = [...path, ...(await getFilesRecursiveAsync(currentPath))];
        }
    }
    return path;
}

(async function() {
    console.log(await getFilesRecursiveAsync('./'));
})();



function testing(testFolder) {

    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
        console.log(file);
        });
    });

    fs.readdir(testFolder,
        {withFileTypes: true},
        (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });

    fs.readdir(testFolder,
        {withFileTypes: true},
        (err, files) => {
        files.forEach(file => {
            console.log(file.isFile());
        });
    });
}