let a = [];
let temp = 0;
for (let i = 0; i < 5; i++) {
    temp = getRandomArbitrary(1, 10);
    a[i] = financial(temp);
    console.log(a[i]);
    }

console.log(Math.max(...a));
console.log(Math.min(...a));

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }




