let a = [];
for (let i = 0; i < 5; i++) {
    a[i] = financial(getRandomArbitrary(1, 10));
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




