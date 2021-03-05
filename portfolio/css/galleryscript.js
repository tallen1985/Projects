const galleryImages = ["./images/cat.jpeg", "./images/guitars.jpeg", "./images/shire.jpeg", "./images/snow.jpeg"]

const image1 = document.getElementById("img1");
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');
const bigpic = document.getElementById('bigPicImg');

function galleryImage(number){
    bigpic.src = galleryImages[number];
}

image1.addEventListener('click', function() {
     galleryImage(0);
    });
image2.addEventListener('click', function() {
    galleryImage(1);
   });
image3.addEventListener('click', function() {
    galleryImage(2);
   });
image4.addEventListener('click', function() {
    galleryImage(3);
   });
