function calculate() {
	var a = Number($("#left").val());
	var b = Number($("#right").val());
	var op = $("#operator").val();

	if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
		alert("Error :(");
		return;
	}

	if ((op === "/" || op === "%") && b === 0) {
		alert("It's over 9000!");
		console.log("It's over 9000!");
		return;
	}

	var result;
	if (op === "+") {
		result = a + b;
	} else if (op === "-") {
		result = a - b;
	} else if (op === "*") {
		result = a * b;
	} else if (op === "/") {
		result = a / b;
	} else {
		result = a % b;
	}

	alert("Result: " + result);
	console.log(result);
}

$("#calc").submit(function (event) {
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
