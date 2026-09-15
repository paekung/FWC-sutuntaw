var balloon = document.getElementById("balloon");
var colors = ["red", "green", "blue"];
var size = 200;
var colorIndex = 0;

function updateBalloon() {
	balloon.style.width = size + "px";
	balloon.style.height = size + "px";
	balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener("click", function () {
	size = size + 10;
	colorIndex = (colorIndex + 1) % 3;
	if (size > 420) {
		size = 200;
		colorIndex = 0;
	}
	updateBalloon();
});

balloon.addEventListener("mouseleave", function () {
	if (size > 200) {
		size = size - 5;
	}
	colorIndex = (colorIndex + 2) % 3;
	updateBalloon();
});
