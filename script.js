var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");


function random(){

	var x = '#'+Math.floor(Math.random()*16777215).toString(16);
	color1.value = x;
	var y = '#'+Math.floor(Math.random()*16777215).toString(16);
	color2.value = y;
	setGradient();
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}

window.addEventListener("load", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", random);


var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
