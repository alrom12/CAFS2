function addition(num1, num2) {
    return +num1 + +num2;
}

function subtraction(num1, num2) {
    return +num1 - +num2;
}

function multiplication(num1, num2) {
    return +num1 * +num2;
}

function division(num1, num2) {
    return +num1 / +num2;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function calculateValue(num1, num2, action) {
    if (Number(num1) != num1) {
        throw new Error('Number one is not a number');
    }

    if (Number(num2) != num2) {
        throw new Error('Number two is not a number');
    }

    const actions = [addition, subtraction, multiplication, division];
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

    const indexOfAction = actions.map(x => x.name).indexOf(action);  

    if (indexOfAction === -1) {
    throw new Error('Action not recognized');
    }

    return actions[indexOfAction](num1, num2);
}

const btn = document.querySelectorAll('th');
let screen1 = document.querySelector('#screen1').textContent;
let screen2 = document.querySelector('#screen2').textContent;
let operator = document.querySelector('#operator').textContent;
let result = document.querySelector('#result').textContent;
let msg = document.querySelector('#msg').textContent;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', takeClickValue);
}

function takeClickValue (event) {
    let clickedButton = event.target.innerText;

    if (clickedButton === 'C') {
        screen1 = '';
        screen2 = '';
        operator = '';
        result = '';
        msg = '';
        document.querySelector('#screen1').textContent = screen1;
        document.querySelector('#screen2').textContent = screen2;
        document.querySelector('#operator').textContent = operator;
        document.querySelector('#result').textContent = result;
        document.querySelector('#msg').textContent = msg;
    }

    if (document.querySelector('#result').textContent.length > 1 || document.querySelector('#result').textContent == '0') {
        msg = 'Press C to clear';
        document.querySelector('#msg').textContent = msg;
        return;
    }

    if (clickedButton === '=') {
        if (document.querySelector('#screen1').textContent === '') {
            msg = 'Please enter a number 1';
            document.querySelector('#msg').textContent = msg;
        }
        if (document.querySelector('#operator').textContent === '') {
            msg = 'Please select an operator';
            document.querySelector('#msg').textContent = msg;
        }
        if (document.querySelector('#screen2').textContent === '') {
            msg = 'Please enter a number 2';
            document.querySelector('#msg').textContent = msg;
        }
    } 

    if (parseInt(clickedButton) || clickedButton === '0') {
        if (operator === '') {
            if (screen1.length < 8) {
                screen1 += clickedButton;
                document.querySelector('#screen1').textContent = screen1;
            } else {
                msg = 'Number is too long';
                document.querySelector('#msg').textContent = msg;
            }
        } else {
            if (screen2.length < 8) {
                screen2 += clickedButton;
                document.querySelector('#screen2').textContent = screen2;
            } else {
                msg = 'Number is too long';
                document.querySelector('#msg').textContent = msg;
            }
        }
    }

    if (clickedButton === '+' || clickedButton === '-' || clickedButton === '*' || clickedButton === '/') {
        if (operator === '' && screen1 !== '') {
            operator = clickedButton;
            document.querySelector('#operator').textContent = operator;
        }
    }

    if (clickedButton === '=') {
        let operatorWord = '';
        if (operator === '+') {
            operatorWord = 'addition';
        } else if (operator === '-') {
            operatorWord = 'subtraction';
        } else if (operator === '*') {
            operatorWord = 'multiplication';
        } else if (operator === '/') {
            operatorWord = 'division';
            if (screen2 == '0') {
                msg = 'Division by zero';
                document.querySelector('#msg').textContent = msg;
            }
        }
        if (document.querySelector('#operator').textContent === '') {
            msg = 'Operator not selected';
                document.querySelector('#msg').textContent = msg;
        } else {
            document.querySelector('#result').textContent = calculateValue(screen1, screen2, operatorWord);
        }
    }
}