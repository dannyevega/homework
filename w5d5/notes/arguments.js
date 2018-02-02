// WEEK 5 DAY 5 NOTES



// JS functions can take fewer arguments than expected. In that case, unspecified arguments have the value undefined
// In JS, a function will still run even if it has been passed no arguments at all
function foo(arg){
	console.log(arg);
}
// foo(5); // 5
// foo(); // undefined



// JS functions will also accept more arguments than are asked for
// You have access to all of the arguments through a special array called arguments
// It contains the values of all the arguments: ones that were anticipated in the function definition, plus the extras
function logArguments(arg1, arg2){
	let result = [];
	for(let i = 0; i < arguments.length; i++){
		result.push(arguments[i]);
	}
	return result;
}
// console.log(logArguments("Wah", "Danny", 5));

// The return value is not a true Array Object -- its only Array like in the sense that we can access elements with indexes and uses length property
// Annoying because we cant use our favorite methods on it like forEach
function thisBreak(){
	arguments instanceof Array;
	arguments.forEach(el => console.log(el)); // TypeError: arguments.forEach is not a function
}
// thisBreak();

// This works
function thisWorks(){
	let args = Array.prototype.slice.call(arguments);
	args instanceof Array;
	args.forEach(el => console.log(el));
}
// thisWorks("Kali", 1, "Wah");

// The above using Array.prototype.slice.call(arguments) is kinda hacky
// ES6 created the .from method to handle the same situation
function thisWorks(){
	let args = Array.from(arguments);
	args instanceof Array;
	args.forEach(el => console.log(el));
}
// thisWorks("Kali", 1, "Wah");



// Using the rest operator with other arguments
// It can be used to capture all a function's arguments into an actual array
// Rest Parameters only grab un-named arguments
// Rest Parameters give us back a real array, so we can use methods like forEach, pop and sort

// Using the arguments way above
function argumentsWay(firstArg) {
	console.log(`The first arg is ${firstArg}!`);

	// We grab the arguments and call slice with 1 to eliminate the firstArg
	let otherArgs = Array.prototype.slice.call(arguments, 1);
	console.log(`The other args are:`);

	otherArgs.forEach((arg) => {
		console.log(arg);
	});
}
// argumentsWay("Mans", "Whose", "Out here", "Kali what you mean");

// Accomplishing the same using the rest operator
function restWay(firstArg, ...otherArgs) {
	console.log(`The first arg is ${firstArg}!`);

	console.log(`The other args are:`);

	otherArgs.forEach((arg) => {
		console.log(arg);
	});
}
// restWay("Mans", "Whose", "Out here", "Kali what you mean");



// Spread syntax
// Passing an array to with the rest operator above is litty
function madLib(verb, pluralNoun1, pluralNoun2, place) {
	return `I like to ${verb} ${pluralNoun1} with ${pluralNoun2} by the ${place}.`;
}
const words = ["eat", "socks", "rabbits", "sea"];
console.log(madLib(...words)); // equivalent to 'madLib(words[0], words[1], words[2], words[3])'



// We can also set default values in ES6
function add(x, y = 17){
	// y is 17 if not passed or passed as `undefined`
	return x + y;
}
console.log(add(3) === 20); // true
console.log(add(3, undefined) === 20); // true
