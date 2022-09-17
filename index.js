function Student(name, age, number, email, batch) {
	this.name = name;
	this.age = age;
	this.number = number;
	this.email = email;
	this.batch = batch;
}

let studentData = JSON.parse(localStorage.getItem("studentData")) || [];
document.querySelector("#details").addEventListener("submit", function () {
	storeDetails(studentData);
	displayStudentCount(studentData);
});

function storeDetails(studentData) {
	event.preventDefault();

	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;
	let number = document.getElementById("number").value;
	let email = document.getElementById("email").value;
	let batch = document.getElementById("batch").value;

	let student = new Student(name, age, number, email, batch);
	studentData.push(student);
	localStorage.setItem("studentData", JSON.stringify(studentData));

	document.getElementById("name").value = "";
	document.getElementById("age").value = "";
	document.getElementById("number").value = "";
	document.getElementById("email").value = "";
	document.getElementById("batch").value = "";
}

displayStudentCount(studentData);

function displayStudentCount(arr) {
	let pt6 = arr.filter(function (ele) {
		return ele.batch == "PTWEB-06";
	});
	let pt7 = arr.filter(function (ele) {
		return ele.batch == "PTWEB-07";
	});
	let pt8 = arr.filter(function (ele) {
		return ele.batch == "PTWEB-08";
	});

	document.getElementById("pt06").innerText = pt6.length;
	document.getElementById("pt07").innerText = pt7.length;
	document.getElementById("pt08").innerText = pt8.length;
}
