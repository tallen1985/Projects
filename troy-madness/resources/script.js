let whoTroy = document.getElementById('whoTroy');

var i = 0;
var finished = false;
var txt = 'Name: Troy Allen   |    Age: Classified   |   Species: Classified(Non-Human) |'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('content-heading').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById('content-who').style.display = 'block';
  }
  
}

whoTroy.addEventListener('click', typeWriter);