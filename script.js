var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

window.onload = setGradient;

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomRGB() {
	var rgbValues = [];
	for(var i = 0; i < 3; i++) {
		rgbValues.push(Math.floor(Math.random() * 256));
	}
	return 'rgb(' + rgbValues[0] + ',' + rgbValues[1] + ',' + rgbValues[2] + ')';
}

function setRandom() {
	body.style.background = 'linear-gradient(to right, ' + randomRGB() + ', ' + randomRGB() + ')';
	css.textContent = body.style.background + ';';
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandom);