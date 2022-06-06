let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
let arr1 = [2, 7, 6, 9, 5];
let citiesOfLithuania = [
    'Vilnius',
    'Kaunas',
    'Klaipėda',
    'Šiauliai',
    'Panevėžys',
    'Alytus',
    'Marijampolė',
    'Mažeikiai',
    'Jonava',
    'Utena',
  ];

function arrDoubled(arr) {
    return arr.map(x => x * 2);
}

function arrMultiplied(arr, value) {
    return arr.map(x => x * value);
}

function arrCountTwos(arr) {
    const arrOfTwos = arr.filter(x => x === 2);
    return arrOfTwos.length;
}

function arrIndexOfFirst(arr, value) {
    return arr.indexOf(value);
}

function arrIndexOfLast(arr, value) {
    return arr.lastIndexOf(value);
}

function reverseNumbers(arr) {
    return arr.reverse();
}

function arrMaxMinFind(arr) {
    return [Math.max(...arr), Math.min(...arr)];
}

function checkForLetters(arr, value) {
    let counter = 0;
    let arrOfLetters = arr.split('');
    arrOfLetters.forEach(element => {
        if (element === value) {
            counter ++;
        }
    });
    return counter;
}

function cleanLettersAndSort(arr) {
    const arrInteger = [];
    console.log(arr);
    arr.forEach(element => {
        if (typeof element === 'number') {
            arrInteger.push(element);
        }
    });
    return arrInteger.sort((a, b) => a - b);
}

function checkIfAllSmaller(arr, max) {
    let r = true;
    arr.forEach(element => {
        if (element < max) {
            r = false;
        }
    });
    return r;
}

function filteredByLetter(arr, letter) {
    return arr.filter(x => x.includes(letter));
}


console.log('Assignment 1: ' + arrDoubled(numbers));

console.log('Assignment 2: ' + arrMultiplied(numbers, 3));

console.log('Assignment 3: ' + arrCountTwos(numbers));

console.log('Assignment 4: ' + arrIndexOfFirst(numbers, 16));

console.log('Assignment 5: ' + arrIndexOfLast(numbers, -5));

console.log('Assignment 6: ' + reverseNumbers(numbers));

console.log('Assignment 7: ' + 'Didžiausas: ' + arrMaxMinFind(numbers)[0] + ', ' + 'Mažiausas: ' + arrMaxMinFind(numbers)[1]);

console.log('Assignment 8: ' + checkForLetters("numbersnn", "n"));

console.log('Assignment 9: ' + cleanLettersAndSort(arr2));

console.log('Assignment 10: ' + checkIfAllSmaller(arr1, 5));

console.log('Assignment 11: ' + filteredByLetter(citiesOfLithuania, 'a'));



