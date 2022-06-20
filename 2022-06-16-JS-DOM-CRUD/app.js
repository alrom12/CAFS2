// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:
// <h2> tag’as su tekstu;
// <p> tag’as su tekstu;
// <ul> tag’as, kurio viduje yra vienas <li>;
// <p> tag’as su tekstu.

const div = document.querySelector('#main');
window.addEventListener('DOMContentLoaded', (e) => {
    const h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.textContent = 'Welcome to my page';

    const p = document.createElement('p');
    div.appendChild(p);
    p.append(document.createTextNode('This P1 is created by JS'));
    // p.textContent = 'P1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.';

    const ul = document.createElement('ul');
    div.appendChild(ul);
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.';

    const p2 = document.createElement('p');
    div.appendChild(p2);
    p2.textContent = 'P2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.';
});