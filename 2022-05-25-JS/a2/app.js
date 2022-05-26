let a = [];
for (let i = 0; i < 5; i++) {
    a[i] = parseFloat(financial(getRandomArbitrary(1, 10)));
    console.log(a[i]);
    }

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
console.log(Math.max(...a));
console.log(Math.min(...a));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }