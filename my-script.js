const mainCont = document.querySelector('#pasta-main');
const pastaName = document.querySelectorAll('h3');
const pastaImg = document.querySelectorAll('.pasta-img');

mainCont.addEventListener('mousemove', event => {
    // mouse positions
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    // get top and left bounds of image (difference between offset relative to viewport and that relative to parent)
    let boundX = mainCont.getBoundingClientRect().left - mainCont.offsetLeft;
    let boundY = mainCont.getBoundingClientRect().top - mainCont.offsetTop;

    for (let i = 0; i < pastaImg.length; i++) { 
        pastaImg[i].style.transform = `translate(${mouseX - boundX}px, ${mouseY - boundY}px)`;
    }

});
