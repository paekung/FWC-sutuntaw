$("#myButton").click(function () {
	var color = "#" + Math.random().toString(16).slice(2, 8);
	$("body").css("background-color", color);
});
