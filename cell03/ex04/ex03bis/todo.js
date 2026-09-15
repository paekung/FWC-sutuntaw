function setCookie(name, value) {
	document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(name) {
	var cookies = document.cookie.split("; ");
	for (var i = 0; i < cookies.length; i++) {
		var parts = cookies[i].split("=");
		if (parts[0] === name) {
			return decodeURIComponent(parts.slice(1).join("="));
		}
	}
	return "";
}

function saveList() {
	var todos = [];
	$("#ft_list div").each(function () {
		todos.push($(this).text());
	});
	setCookie("todos", JSON.stringify(todos));
}

function addTodo(text, save) {
	var div = $("<div></div>").text(text);
	div.click(function () {
		if (confirm("Do you want to remove this TO DO?")) {
			div.remove();
			saveList();
		}
	});
	$("#ft_list").prepend(div);
	if (save) {
		saveList();
	}
}

$("#new").click(function () {
	var text = prompt("New TO DO:");
	if (text && text.trim() !== "") {
		addTodo(text.trim(), true);
	}
});

var saved = getCookie("todos");
if (saved) {
	var todos = JSON.parse(saved);
	for (var i = todos.length - 1; i >= 0; i--) {
		addTodo(todos[i], false);
	}
}
