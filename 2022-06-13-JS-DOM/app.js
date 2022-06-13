function displayWindowSize() {
    let h1Element = document.querySelector('h1');
    let widthHeight = [window.innerWidth, window.innerHeight];
    if (h1Element) {
        h1Element.textContent = `${widthHeight[0]} x ${widthHeight[1]}`;
    }
}
window.addEventListener('resize', displayWindowSize);
displayWindowSize();