function dblPlus(num, count) {
    if (Number.isInteger(num) && Number.isInteger(count)) {
        for (let i = 0; i < count; i++) {
            num ++;       
        }
        return num;
    } else {
        return false;
    }

}
a = dblPlus("a",6);
console.log(a);

function sumOfDigits(num) {
    let sum = 0;
    if (Number.isInteger(num)) {
        let str = num.toString();
        let arr = str.split('');
        for (let i = 0; i < num.toString().length; i++) {
            sum += +arr[i];
        }
        return sum;
    } else {
        return false;
    }
}

console.log(sumOfDigits(528));

let sum = 0;
function sumOfDigitsRecursion(num) {
    let str = num.toString();
    console.log(str);
    let arr = str.split('');
    console.log(arr);
    if (arr.length == 0) {
        return sum;
    }
    sum += Number(arr[0]);
    console.log(sum);
    let arrM = arr.slice(1);
    let arrS = arrM.toString();
    let arrN = arrS.split(',');
    console.log (arrN);
    // return sumOfDigitsRecursion(arrN);
}

console.log(sumOfDigitsRecursion(1111));

// function sumOfDigitsGS(number) {
//     if (number == 0) {
//         return 0;
//     }
//     let remainder = number % 10;
//     let remainNum = Math.floor(number / 10);
//     return remainder + sumOfDigitsGS(remainNum);
// }
// console.log(sumOfDigitsGS(222));

// const sumOfDigitsArrow = number => 
//     number ? 
//     (number % 10) + sumOfDigitsArrow(Math.floor(number / 10)) : 
//     0;

//Arrow function
let arrowInner = (i, arr, result) => {
    if (i >= arr.length) {
      return result;
    }
    result += Number(arr[i]);
    i++;
    return arrowInner(i, arr, result);
  };
  let arrow = (num) => {
    let i = 0;
    let arr = num.toString();
    let result = 0;
    return arrowInner(i, arr, result);
  };
  //CAll
  console.log("simple", sumOfDigits(123));
  console.log("arrow", arrow(123));

let sumOfDigitsArrow = (num) => {
    if (Number.isInteger(num)) {
        if (num == 0) {
            return 0;
        }
        let pos = num % 10;
        let n = Math.floor(num / 10);
        return pos + sumOfDigitsArrow(n);
    }
}
console.log(sumOfDigitsArrow(123456789));

function sumOfDigitsGV(nums) {
    
    let stringArr = String(nums).split("");
    if (stringArr.length === 0) {
      return result;
    }
    return Number(stringArr.shift()) + sumOfDigits(Array.from(stringArr, Number).join(""));
  }
  let result = 0;
  console.log(sumOfDigitsGV(4321))