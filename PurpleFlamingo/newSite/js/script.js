const jumbotron = document.getElementById('jumbotron');
const navBar = document.getElementById('navBar')
const rotatingImage = document.getElementById('rotatingImage')

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

let spaceDropdown = document.getElementById('spaceDropdown');
spaceDropdown.addEventListener('mouseover', function() {
    spaceDropdown.children[0].style.display = "block";
})
spaceDropdown.addEventListener('mouseleave', function() {
    spaceDropdown.children[0].style.display = "none";
});