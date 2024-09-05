const createTodoComponent = (todo, setIsDone, remove) => {
	const div = document.createElement("div");
	const label = document.createElement("label");
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.checked = todo.done;
	checkbox.onchange = () => {
		setIsDone(checkbox.checked);
	};
	const p = document.createElement("p");
	p.innerHTML = todo.title;
	const del = document.createElement("button");
	del.innerHTML = "×";
	del.onclick = () => {
		remove();
	};
	label.appendChild(checkbox);
	label.appendChild(p);
	label.appendChild(del);
	div.appendChild(label);
	return div;
};
