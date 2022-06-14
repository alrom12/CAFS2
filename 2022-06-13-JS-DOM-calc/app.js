const btn = document?.querySelectorAll('th');

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

function updateMsg(msg) {
    document.querySelector('#msg').textContent = msg;
}

function takeClickValue (event) {
    let clickedButton = event.target.innerText;
    let screen1 = document?.querySelector('#screen1').textContent;
    let screen2 = document?.querySelector('#screen2').textContent;
    let operator = document?.querySelector('#operator').textContent;
    let result = document?.querySelector('#result').textContent;
    let msg = document?.querySelector('#msg').textContent;

    if (clickedButton === 'C') {
        document.querySelector('#screen1').textContent = '';
        document.querySelector('#screen2').textContent = '';
        document.querySelector('#operator').textContent = '';
        document.querySelector('#result').textContent = '';
        updateMsg('');
        return;
    }

    if (result.length > 1 || result == '0') {
        // updateMsg('Press C to clear');
        document.querySelector('#screen1').textContent = result;
        document.querySelector('#screen2').textContent = '';
        document.querySelector('#operator').textContent = '';
        document.querySelector('#result').textContent = '';
        updateMsg('Continue to calculate');
        return;
    }

    if (clickedButton === '=') {
        if (screen1 === '') {
            updateMsg('Please enter a number 1');
            return;
        }
        if (operator === '') {
            updateMsg('Please select an operator');
            return;
        }
        if (screen2 === '') {
            updateMsg('Please enter a number 2');
            return;
        }
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
                updateMsg('Division by zero');
                return;
            }
        }
        if (document.querySelector('#operator').textContent === '') {
            updateMsg('Operator not selected');
            return;
        } else {
            document.querySelector('#result').textContent = calculateValue(screen1, screen2, operatorWord);
            updateMsg('Result!');
        }
    } 

    if (parseInt(clickedButton) || clickedButton === '0') {
        if (operator === '') {
            if (screen1.length < 8) {
                document.querySelector('#screen1').textContent += clickedButton;
            } else {
                updateMsg('Number is too long');
            }
        } else {
            if (screen2.length < 8) {
                document.querySelector('#screen2').textContent += clickedButton;
            } else {
                updateMsg('Number is too long');
            }
        }
    }

    if (clickedButton === '+' || clickedButton === '-' || clickedButton === '*' || clickedButton === '/') {
        if (operator === '' && screen1 !== '') {
            document.querySelector('#operator').textContent = clickedButton;
        }
    }
}

for (let i = 0; i < btn.length; i++) {
    btn[i]?.addEventListener('click', takeClickValue);
}