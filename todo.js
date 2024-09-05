let ToDo = new class {
	constructor() {
		this.tasks = JSON.parse(localStorage.getItem("tasks") ?? `[
			{
				"title": "買い物",
				"done": true
			},
			{
				"title": "メール返信",
				"done": false
			},
			{
				"title": "レポート提出",
				"done": false
			}
		]`);
		this.draw();
	}
	
	add(task) {
		this.tasks.push({
			done: false,
			...task
		});
		localStorage.setItem("tasks", JSON.stringify(this.tasks));
		this.draw();
	}
	
	setIsDone(task, done) {
		this.tasks = this.tasks.map(t => task !== t? t : {
			...task,
			done
		});
		localStorage.setItem("tasks", JSON.stringify(this.tasks));
		this.draw();
	}
	
	remove(task) {
		this.tasks = this.tasks.filter(t => task !== t);
		localStorage.setItem("tasks", JSON.stringify(this.tasks));
		this.draw();
	}
	
	draw() {
		while (document.getElementById("tasks").firstChild) {
			document.getElementById("tasks").removeChild(document.getElementById("tasks").firstChild);
		}
		for (let task of this.tasks) {
			document.getElementById("tasks").appendChild(createTodoComponent(
				task,
				(done) => this.setIsDone(task, done),
				() => this.remove(task)
			));
		}
	}
};

document.add.onsubmit = () => {
	ToDo.add({
		title: document.add.title.value
	});
	document.add.title.value = "";
	return false;
};

