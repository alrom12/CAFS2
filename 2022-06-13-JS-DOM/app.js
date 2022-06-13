window.addEventListener('resize', function(event){

    let widthHeight = [window.innerWidth, window.innerHeight];
    if (document.querySelector('h1')) {
        document.querySelector('h1').textContent = `${widthHeight[0]} x ${widthHeight[1]}`;
    }

});