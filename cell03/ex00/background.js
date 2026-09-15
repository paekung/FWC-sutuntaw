var button = document.getElementById("myButton");

button.addEventListener("click", function () {
	var color = "#" + Math.random().toString(16).slice(2, 8);
	document.body.style.backgroundColor = color;
});
