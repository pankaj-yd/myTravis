/*
// add function
function add(a, b){
	if(a.typeOf() !== 'number' || b.typeOf() !== 'number'){
		return `Either of input isn't a number.`;
	}
	else{
		return a+b;
	}
}

//subtract function
function subtract(a, b){
▷⋅⋅⋅⋅⋅⋅⋅if(a.typeOf() !== 'number' || b.typeOf() !== 'number'){
▷⋅⋅⋅⋅⋅⋅⋅▷⋅⋅⋅⋅⋅⋅⋅return `Either of input isn't a number.`;
▷⋅⋅⋅⋅⋅⋅⋅}
	else{
		return a-b;
	}
}

//multiply function
function multiply(a, b){
▷⋅⋅⋅⋅⋅⋅⋅if(a.typeOf() !== 'number' || b.typeOf() !== 'number'){
▷⋅⋅⋅⋅⋅⋅⋅▷⋅⋅⋅⋅⋅⋅⋅return `Either of input isn't a number.`;
▷⋅⋅⋅⋅⋅⋅⋅}
	else{
		return a*b;
	}
}

//Division function
function division(a,b){
▷⋅⋅⋅⋅⋅⋅⋅if(a.typeOf() !== 'number' || b.typeOf() !== 'number'){
▷⋅⋅⋅⋅⋅⋅⋅▷⋅⋅⋅⋅⋅⋅⋅return `Either of input isn't a number.`;
▷⋅⋅⋅⋅⋅⋅⋅}
	else{
		return a/b; //divide by zero is infinity, already defined in js :)
	}
}
*/

//export const add = (num1, num2) => num1 + num2;
//export const sub = (num1, num2) => num1 - num2;
//export const mult = (num1, num2) => num1 * num2;
//export const div = (num1. num2) => num1/num2;

const functions = {
	add: (num1, num2) => num1 + num2,
	sub: (num1, num2) => num1 - num2,
	mult: (num1, num2) => num1 * num2,
	div : (num, pum) => num/pum
};
module.exports = functions;

