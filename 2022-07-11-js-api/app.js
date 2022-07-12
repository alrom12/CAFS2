const url = 'https://jsonplaceholder.typicode.com/posts';
const init = {
    method: 'GET',
    mode: 'cors',
};
let divMain = document.querySelector('[data-type="main"]');

function createCards(data) {
    data.forEach(element => {
        let card = divMain.appendChild(document.createElement('div'));
        card.classList.add('card', 'mt-3', 'flex-fill');

        let cardTitle = card.appendChild(document.createElement('div'));
        cardTitle.classList.add('card-header', 'fw-bold', 'text-capitalize', 'text-start', 'text-wrap');
        cardTitle.innerText = element.title;

        let cardText = card.appendChild(document.createElement('div'));
        cardText.classList.add('card-body', 'text-center');
        cardText.innerText = element.body;

        let cardFooter = card.appendChild(document.createElement('div'));
        cardFooter.classList.add('card-footer', 'fst-italic', 'text-end');
        cardFooter.innerText = `user id: ${element.userId} | record id: ${element.id}`;
    });
}

// try {
    let result = fetch(url, init)
        .then((response) => {
            if (response.ok) {
                response.json().then(response => createCards(response));
            } else {
                console.log(response);
                throw new Error({'ok': response.ok, 'status': response.status, 'url': response.url});   
            }
        })
        .catch((error) => {
            console.warn(error);
        });
// } catch (err) {
//     console.log(`ERROR: ${err}`);
// }