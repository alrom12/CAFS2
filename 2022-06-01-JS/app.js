function checkNumber(num) {
    if (Number.isInteger(num)) {
        let num3 = num % 3;
        let num5 = num % 5;
        if (num3 == 0 && num5 == 0) {
            return 101;
        }
        if (num3 == 0) {
            return 102;
        }
        if (num5 == 0) {
            return 103;
        }
        return 100;
    }
    return false;
}
let num = +prompt("Enter a number");
checkNumber(num);
let result = checkNumber(num);
switch (result) {
    case 101:
        console.log("Skaičius dalijasi iš 3 ir iš 5");
        break;
    case 102:
        console.log("Skaičius dalijasi iš 3");
        break;
    case 103:
        console.log("Skaičius dalijasi iš 5");
        break;
    case 100:
        console.log("Skaičius nesidalija nei iš 3 nei iš 5");
        break;
    default:
        console.log("it is not a whole number");
        break;
}


// console.log(checkNumber(15));
// console.log(checkNumber(1));
// console.log(checkNumber(9));
// console.log(checkNumber(20));


// Jei skaičius dalijamas iš 3, pamatysime "Skaičius dalijasi iš 3"
	
// Jei skaičius dalijamas iš 5, pamatysime "Skaičius dalijasi iš 5"
	
// Jei skaičius dalijamas iš 3 ir 5, pamatysime "Skaičius dalijasi iš 3 ir iš 5"
	
// Jei skaičius nesidalija iš 3 arba 5, pamatysime Skaičius "Skaičius nesidalija nei iš 3 nei iš 5"
