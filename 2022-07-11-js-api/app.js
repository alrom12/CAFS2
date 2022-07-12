let divMain = document.querySelector('[data-type="main"]');
let div = document.createElement('div');



function printData(data) {
    // console.log('DATA', data);
    data.forEach(element => {



        let card = divMain.appendChild(document.createElement('div'));
        card.classList.add('card');
        card.classList.add('mt-3');
        // console.log('cardMain', card);

        let cardTitle = card.appendChild(document.createElement('div'));
        // console.log(cardTitle);
        cardTitle.classList.add('card-header');
        cardTitle.innerText = element.title;

        let cardText = card.appendChild(document.createElement('div'));
        cardText.classList.add('card-body');
        cardText.innerText = element.body;

        let cardFooter = card.appendChild(document.createElement('div'));
        cardFooter.classList.add('card-footer');
        cardFooter.innerText = `user id: ${element.userId} | record id: ${element.id}`;



        //LEGACY CODE
        // cardMain = querySelectorAll('card');
        // console.log(cardMain);


        // let cardTitle = cardMain.append(div);
        // cardTitle.classList.add('card-title');
        // let cardBody = cardMain.append(div);
        // cardBody.classList.add('card-body');
        // let cardFooter = cardBody.append(div);
        // cardFooter.classList.add('card-footer');
        // cardTitle.innerText = element.title;
        // cardBody.innerText = element.body;
        // cardFooter.innerText = `Blog id: ${element.id}, created by user ${element.id}`;
    });
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => printData(data));

