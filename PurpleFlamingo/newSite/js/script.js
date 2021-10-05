const jumbotron = document.getElementById('jumbotron');
const navBar = document.getElementById('navBar');
const rotatingImage = document.getElementById('rotatingImage');
const hamburger = document.getElementById('hamburger');

let imageUrls = [
    './images/dad-astronaut.jpeg',
    './images/carrots.jpeg',
    './images/pom-pinch-pot.jpg',
    './images/sage-wine.jpg'
]

let jumboTimer = window.setInterval(function () {
    let i = jumbotron.dataset.index;
    rotatingImage.setAttribute('src', imageUrls[i]);
    if (i < (imageUrls.length - 1)) {
        jumbotron.dataset.index++
    } else {
        jumbotron.dataset.index = 0
    }
}, 4000);

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
   navBar.style.visibility = "visible";
   navBar.style.opacity = '1';
});
document.addEventListener('click', (e) => {
    let element = e.target;

    if (navBar.style.visibility = 'visible'){
        if (element !== document.getElementById('navBar')) {
            navBar.style.visibility = 'hidden';
            navBar.style.opacity = 0;
        }
    }
    
})