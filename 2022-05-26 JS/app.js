// A1
let x = 50;
let y = 10;
let sum = x + y;
let difference = x - y;
let multiplication = x * y;
let division = x / y;

console.log(sum);
console.log(difference);
console.log(multiplication);
console.log(division);

// A2


let x = 1;
if(x % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// A3
let n = 3;
if (n <= 0) {
    console.log("not a group");
} else if (n == 1) {
    console.log("solo");
} else if (n == 2) {
    console.log("duo");
} else if (n == 3) {
    console.log("trio");
} else if (n == 4) {
    console.log("quattro");
} else if (n > 4){
    console.log("big group");
} else {
    console.log("error");
}


(condition) ? (if true, do this) : (otherwise, do this)
function checkAge (age) {
    (age > 18) ? (return true) : (return confirm('Did parents allow you?'));
}

function getMin (a, b) {
    return Math.min(a,b);
}