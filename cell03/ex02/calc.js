var form = document.getElementById("calc");
var left = document.getElementById("left");
var right = document.getElementById("right");
var operator = document.getElementById("operator");

function calculate() {
	var a = Number(left.value);
	var b = Number(right.value);

	if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
		alert("Error :(");
		return;
	}

	var result;
	if (operator.value === "+") {
		result = a + b;
	} else if (operator.value === "-") {
		result = a - b;
	} else if (operator.value === "*") {
		result = a * b;
	} else if (operator.value === "/") {
		if (b === 0) {
			alert("It's over 9000!");
			console.log("It's over 9000!");
			return;
		}
		result = a / b;
	} else if (operator.value === "%") {
		if (b === 0) {
			alert("It's over 9000!");
			console.log("It's over 9000!");
			return;
		}
		result = a % b;
	}

	alert("Result: " + result);
	console.log(result);
}

form.addEventListener("submit", function (event) {
	event.preventDefault();
	calculate();
	resetTimer();
});

function resetTimer() {
	clearInterval(timer);
	timer = setInterval(pleaseUseMe, 30000);
}

function pleaseUseMe() {
	alert("Please, use me...");
}

var timer = setInterval(pleaseUseMe, 30000);
