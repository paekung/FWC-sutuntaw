var list = document.getElementById("ft_list");

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
	for (var i = 0; i < list.children.length; i++) {
		todos.push(list.children[i].textContent);
	}
	setCookie("todos", JSON.stringify(todos));
}

function addTodo(text, save) {
	var div = document.createElement("div");
	div.textContent = text;
	div.addEventListener("click", function () {
		if (confirm("Do you want to remove this TO DO?")) {
			div.remove();
			saveList();
		}
	});
	list.insertBefore(div, list.firstChild);
	if (save) {
		saveList();
	}
}

document.getElementById("new").addEventListener("click", function () {
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
