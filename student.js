let studentData = JSON.parse(localStorage.getItem("studentData")) || [];
displayStudentCount(studentData);
displayStudentData(studentData);
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

function displayStudentData(arr) {
	document.querySelector("tbody").innerText = "";
	displayStudentCount(arr);
	arr.map(function (ele, index, arr) {
		// console.log("Hello");
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		let td3 = document.createElement("td");
		let td4 = document.createElement("td");
		let td5 = document.createElement("td");
		let td6 = document.createElement("td");
		let td7 = document.createElement("td");

		td1.innerText = ele.name;
		td2.innerText = ele.age;
		td3.innerText = ele.number;
		td4.innerText = ele.email;
		td5.innerText = ele.batch;

		td6.innerHTML = `<i class="fa-solid fa-trash"></i>`;
		td6.addEventListener("click", function () {
			removeStudent(index);
		});
		td7.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
		td7.children[0].addEventListener("click", function () {
			updateDetails(index, arr);
		});
		tr.append(td1, td2, td3, td4, td5, td6, td7);

		document.querySelector("tbody").append(tr);
	});
}

function removeStudent(index) {
	studentData.splice(index, 1);
	localStorage.setItem("studentData", JSON.stringify(studentData));
	displayStudentData(studentData);
}

function updateDetails(index, studentData) {
	var arr = [...studentData];
	let obj = arr[index];
	document.getElementById("updateStudent").style.display = "block";
	document.querySelector("nav").style.opacity = "50%";
	document.querySelector("#studentDisplay").style.opacity = "50%";
	document.querySelector("#status").style.opacity = "50%";

	document.getElementById("name").value = obj.name;
	document.getElementById("age").value = obj.age;
	document.getElementById("number").value = obj.number;
	document.getElementById("email").value = obj.email;
	document.getElementById("batch").value = obj.batch;

	document.getElementById("saveChanges").addEventListener("click", function () {
		event.preventDefault();
		let newObj = {};
		newObj.name = document.getElementById("name").value;
		newObj.age = document.getElementById("age").value;
		newObj.number = document.getElementById("number").value;
		newObj.email = document.getElementById("email").value;
		newObj.batch = document.getElementById("batch").value;
		arr[index] = newObj;
		localStorage.setItem("studentData", JSON.stringify(arr));

		document.getElementById("updateStudent").style.display = "none";
		arr;
		displayStudentData(arr);
		document.querySelector("nav").style.opacity = "100%";
		document.querySelector("#studentDisplay").style.opacity = "100%";
		document.querySelector("#status").style.opacity = "100%";
	});
	document.getElementById("cancelBttn").addEventListener("submit", function () {
		event.preventDefault();
		document.getElementById("updateStudent").style.display = "none";
		document.querySelector("nav").style.opacity = "100%";
		document.querySelector("#status").style.opacity = "100%";
		document.querySelector("#studentDisplay").style.opacity = "100%";
		displayStudentData(arr);
	});
	// index = null;
}
