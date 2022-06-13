window.addEventListener('resize', function(event){

    let widthHeight = [window.innerWidth, window.innerHeight];
    document.querySelector('h1').textContent = `${widthHeight[0]} x ${widthHeight[1]}`;

});