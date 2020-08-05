var i = 0;
var txt = 'Are you excited?!'; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("textfx").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}