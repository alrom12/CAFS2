// Assignment: 12

function addition (num1, num2) {
    return num1 + num2;
}

function subtraction (num1, num2) {
    return num1 - num2;
}

function multiplication (num1, num2) {
    return num1 * num2;
}

function division (num1, num2) {
    return num1 / num2;
}

function calculateValue (num1, num2, action) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return false;
    }
    switch (action) {
        case 'addition':
            return addition (num1, num2);
            break;
        case 'subtraction':
            return subtraction (num1, num2);
            break;
        case 'multiplication':
            return multiplication (num1, num2);
            break;
        case 'division':
            if (num2 == 0) {
                return false;
            }
            return division (num1, num2);
            break;    
        default:
            return false;
    }
}

console.log(calculateValue(1, 2, 'addition'));
console.log(calculateValue(1, 'a', 'addition'));
console.log(calculateValue(8, 9, 'subtraction'));
console.log(calculateValue(4, 2, 'multiplication'));
console.log(calculateValue(6, 3, 'division'));
console.log(calculateValue(6, 0, 'division'));


