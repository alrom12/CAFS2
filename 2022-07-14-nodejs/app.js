const os = require('os');
console.log(os.cpus());
for (i = 0; i < os.cpus().length; i++) {
    console.log(os.cpus()[i].model);
}
console.log('Number of CPUs: ', os.cpus().length);