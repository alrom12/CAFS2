const Movie = require('./classes/Movie');

console.log('hello!');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('bye!');

let movieSpider = new Movie("SpiderMan", 2018, "Jon Watts", 100000, 200000);
let movieBatman = new Movie("Batman", 2008, "Tim Burton", 800000, 1000000);

console.log(movieSpider.getIntroduction());
console.log(movieSpider.getProfit());
console.log('----------------------------------------------------');
console.log(movieBatman.getIntroduction());
console.log(movieBatman.getProfit());