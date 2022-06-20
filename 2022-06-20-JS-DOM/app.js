function realtime() {
    let timeElement = document.getElementById('time');
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeElement.innerText = time;

    setInterval(() => {
        date = new Date();
        time = date.toLocaleTimeString();
        timeElement.innerText = time;
    }, 1000)
}

window.addEventListener('load', (event) => {
    realtime();
    let button = document.getElementById('button');
    let msg = document.getElementById('msg');
    let msgName = document.getElementById('name');
    let msgComment = document.getElementById('comment');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        let pElement = document.createElement('p');
        msg.appendChild(pElement)
        pElement.classList.add('fst-italic');
        pElement.classList.add('mb-2');
        pElement.innerText = "Your message is recorded";
        button.disabled = true;
        // pElement.innerText = `${msgName.value} says: ${msgComment.value}`;
    }, {once: true});
});