

let divMain = document.querySelector('[data-type="main"]');

function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        // .then(data => data);
}

function createCards(data) {
    data.forEach(async element => {
        let card = divMain.appendChild(document.createElement('div'));
        card.classList.add('card', 'mt-3', 'flex-fill');

        let cardTitle = card.appendChild(document.createElement('div'));
        cardTitle.classList.add('card-header', 'fw-bold', 'text-capitalize', 'text-start', 'text-wrap');
        cardTitle.innerText = element.title;

        let cardText = card.appendChild(document.createElement('div'));
        cardText.classList.add('card-body', 'text-center');
        cardText.innerText = element.body;

        // getUser(element.userId).then(userData => { 
        //     // console.log(userData.name);
        //     let cardFooter = card.appendChild(document.createElement('div'));
        //     cardFooter.classList.add('card-footer', 'fst-italic', 'text-end');
        //     cardFooter.innerText = `user id: ${userData.name} | record id: ${element.id}`;
        // });

        let userData = await getUser(element.userId);
        let cardFooter = card.appendChild(document.createElement('div'));
        cardFooter.classList.add('card-footer', 'fst-italic', 'text-end');
        cardFooter.innerText = `user id: ${userData.name} | record id: ${element.id}`;
    });
}



document.querySelector('button').addEventListener('click', function() {
	jQuery.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
		createCards(data);
	});
});