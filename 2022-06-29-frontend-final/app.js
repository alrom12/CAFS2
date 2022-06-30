function validateEmail (emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailAdress.match(regexEmail)) {
            return true; 
        } else {
            return false; 
    }
}

window.addEventListener('load', (event) => {
    let buttonHello = document.getElementById('button-hello');
    buttonHello?.addEventListener('click', (event) => {
        alert('Hello World!');
    });

    let buttonsUpLowText = document.querySelectorAll('.btn-outline-secondary');
    let upLowText = document.getElementById('up-low-text');
    for (let i = 0; i < buttonsUpLowText.length; i++) {
        buttonsUpLowText[i]?.addEventListener('click', (event) => {
            let text = upLowText.value;
            if (event.target.id === 'text-all-up') {
                upLowText.value = text.toUpperCase();
            }            
            if (event.target.id === 'text-all-low') {
                upLowText.value = text.toLowerCase();
            }
            if (event.target.id === 'text-first-up') {
                upLowText.value = text.charAt(0).toUpperCase() + text.slice(1);
            }
            if (event.target.id === 'text-first-low') {
                upLowText.value = text.charAt(0).toLowerCase() + text.slice(1);
            }
        });
    }

    let buttonEmail = document.getElementById('button-save');
    let emailValidateElement = document.getElementById('email-validate');
    let phoneValidateElement = document.getElementById('phone-validate');

    buttonEmail?.addEventListener('click', (event) => {
        let emailAdress = document.getElementById('email-input').value;
        if (validateEmail(emailAdress)) {
            emailValidateElement.classList.remove('text-danger');
            emailValidateElement.classList.remove('d-none');
            emailValidateElement.classList.add('text-success');
            emailValidateElement.children[0].innerText = 'Looks good!';
        } else {
            emailValidateElement.classList.remove('text-success');
            emailValidateElement.classList.remove('d-none');
            emailValidateElement.classList.add('text-danger');
            emailValidateElement.children[0].innerText = 'Please check email';
        }

        let phoneNumber = document.getElementById('phone-input').value;
        if (Number.isInteger(+phoneNumber) && phoneNumber.length >= 8 && phoneNumber.length <= 11) {
            phoneValidateElement.classList.remove('text-danger');
            phoneValidateElement.classList.remove('d-none');
            phoneValidateElement.classList.add('text-success');
            phoneValidateElement.children[0].innerText = 'Looks good!';
        } else {
            phoneValidateElement.classList.remove('text-success');
            phoneValidateElement.classList.remove('d-none');
            phoneValidateElement.classList.add('text-danger');
            phoneValidateElement.children[0].innerText = 'Please check phone number';
        }
    }); 
    
    let buttonBlockText = document.getElementById('input-text');
    let buttonBlock = document.getElementById('button-block');
    buttonBlock?.addEventListener('click', (event) => {
        buttonBlockText.disabled = true;
    });
    let buttonUnblock = document.getElementById('button-unblock');
    buttonUnblock?.addEventListener('click', (event) => {
        buttonBlockText.disabled = false;
    });

    let mouseOver = document.getElementById('mouse-over');
    let imageOver1 = document.getElementById('img1'); //hidden by default
    let imageOver2 = document.getElementById('img2');
    mouseOver?.addEventListener('mouseenter', (event) => {
        imageOver2.setAttribute('hidden', 'true');
        imageOver1.removeAttribute('hidden', 'false');
    });
    mouseOver?.addEventListener('mouseleave', (event) => {
        imageOver1.setAttribute('hidden', 'true');
        imageOver2.removeAttribute('hidden', 'false');
    });

    let textAdjustable = document.getElementById('text-adjustable');
    let dropdownMenuCursors = document.getElementById('dropdown-menu-cursors');
    for (let i = 0; i < dropdownMenuCursors.children.length; i++) {
        dropdownMenuCursors.children[i]?.addEventListener('click', (event) => {
            event.preventDefault();
            textAdjustable.style.cursor = event.target.id;
        });
    }

    let dropdownMenuColours = document.getElementById('dropdown-menu-colours');
    for (let i = 0; i < dropdownMenuColours.children.length; i++) {
        dropdownMenuColours.children[i]?.addEventListener('click', (event) => {
            event.preventDefault();
            textAdjustable.style.color = event.target.id;
        });
    }

    let dropdownMenuBorders = document.getElementById('dropdown-menu-borders');
    for (let i = 0; i < dropdownMenuBorders.children.length; i++) {
        dropdownMenuBorders.children[i]?.addEventListener('click', (event) => {
            textAdjustable.style.border = `1px solid ${event.target.id.split('-')[1]}`;
            console.log(`1px solid ${event.target.id.split('-')[1]}`);
            event.preventDefault();
        });
    }

    let resetAllButton = document.getElementById('reset-all');
    resetAllButton?.addEventListener('click', (event) => {
        textAdjustable.style.cursor = 'default';
        textAdjustable.style.color = 'black';
        textAdjustable.style.border = 'none';
    });
});