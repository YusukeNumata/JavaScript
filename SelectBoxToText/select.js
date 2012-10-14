function selected(element) {
	document.getElementById("text").value = element.value;
};

function inputed(element) {
	var select = document.getElementById("select");
	var options = select.options;
	for (var i = 0; i < options.length; i++) {
		var option = options[i];
		if (option.value === element.value) {
			select.selectedIndex = i;
			break;
		}
	}
}

