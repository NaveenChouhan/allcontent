



let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");
let btnAdd = document.querySelector("#btnAdd");
let btnMinus = document.querySelector("#btnMinus");
let btnDivide= document.querySelector("#btnDivide");
let btnMultiply= document.querySelector("#btnMultiply");
let r1 = document.querySelector("#resultp");
btnAdd.addEventListener("click", add);
btnMinus.addEventListener("click", minus);
btnDivide.addEventListener("click",divide);
btnMultiply.addEventListener("click", multiply);
function minus() {

	let a = parseInt(num1.value);
	let b = parseInt(num2.value);

	r1.innerText = a - b;
	result.value = a - b;

}
function add() {

	let a = parseInt(num1.value);
	let b = parseInt(num2.value);

	r1.innerText = a + b;
	result.value = a + b;




}
function divide() {

	let a = parseInt(num1.value);
	let b = parseInt(num2.value);

	r1.innerText = a / b;
	result.value = a / b;

}
function multiply() {

	let a = parseInt(num1.value);
	let b = parseInt(num2.value);

	r1.innerText = a * b;
	result.value = a * b;

}



