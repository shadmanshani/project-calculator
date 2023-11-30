
const valueOne = document.getElementById("valueOne");
const valueTwo = document.getElementById("valueTwo");
const result = document.getElementById("result");

// step 2 : take two input value & find the sum of those value

console.log(valueOne.value);
console.log(valueTwo.value);
add();
// functions for addition

function add() {
	if (valueOne.value && valueTwo.value) {
		let add = parseInt(valueOne.value) + parseInt(valueTwo.value);
		result.innerText = add;
		clear();
	}
	else {
		alert("please enter all the values")
	}
}

// functions for subtract

function subtract() {
	if (valueOne.value && valueTwo.value) {
		let subtract = parseInt(valueOne.value) - parseInt(valueTwo.value);
		result.innerText = subtract;
		clear();
	}
	else {
		alert("please enter all the values")
	}
}

// functions for division

function division() {
	if (valueOne.value && valueTwo.value) {
		let division = parseInt(valueOne.value) / parseInt(valueTwo.value);
		result.innerText = division.toFixed(2);
		clear();
	}
	else {
		alert("please enter all the values")
	}
}

// functions for multiply

function multiply() {
	if (valueOne.value && valueTwo.value) {
		let multiply = parseInt(valueOne.value) * parseInt(valueTwo.value);
		result.innerText = multiply;
		clear();
	}
	else {
		alert("please enter all the values")
	}
}
function clear() {
	valueOne.value = " ";
	valueTwo.value = " ";
}