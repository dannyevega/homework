// problem 1
function mysteryScoping1() {
	var x = 'out of block';
	if (true) {
		var x = 'in block';
		console.log(x);
	}
	console.log(x);
}
// mysteryScoping1();
// will print 'in block' twice
// this is because it doesnt matter if var x is within a block or not -- x is a variable holding a reference to a string and when we overwrite it within the true block, its changed forever -- this would print 'in block' twice regardless if the true block was there cause we're overwriting it



// // problem 2
function mysteryScoping2() {
	const x = 'out of block';
	if (true) {
		const x = 'in block';
		console.log(x);
	}
	console.log(x);
}
// mysteryScoping2();
// this will throw an error because the keyword const is a variable that cant be overwritten
// JS will yell at you if you try to run this saying 'x' has already been defined
// this will work:
function mysteryScoping2() {
	const x = 'out of block';
	if (true) {
		const z = 'in block';
		console.log(z);
	}
	console.log(x);
}
// mysteryScoping2();
// will print 'in block' then 'out of block'
// we need to change the name of the const variable in order to make this print as expected



// problem 3
function mysteryScoping3() {
	const x = 'out of block';
	if (true) {
		var x = 'in block';
		console.log(x);
	}
	console.log(x);
}
// mysteryScoping3();
// this will throw the same error as above -- you can't overwrite a variable declared using const!
// this will work:
function mysteryScoping3() {
	const x = 'out of block';
	if (true) {
		var z = 'in block';
		console.log(z);
	}
	console.log(x);
}
// mysteryScoping3();



// problem 4
// ASK KELLY WHY NODE THROWS AN ERROR FOR THIS?-- it says unexpected identifier when running node but prints to the console as expected when printing in dev tools
function mysteryScoping4() {
	let x = 'out of block';
	if (true) {
		let x = 'in block';
		console.log(x);
	}
	console.log(x);
}
// mysteryScoping4();
// 'in block'
// 'out of block'
// this works because keyword let has block scope so both x variables are different from each other -- x inside of the block is completely different from outside the block



// problem 5
function mysteryScoping5() {
	let x = 'out of block';
	if (true) {
		let x = 'in block';
		console.log(x);
	}
	let x = 'out of block again';
	console.log(x);
}
// mysteryScoping5();
// will throw an error saying 'x' has already been declared because you can't decalre a let variable with same name in same scope -- CONFIRM W KELLY
// this would work if let variable on line 91 was just overwritten
function mysteryScoping5() {
	let x = 'out of block';
	if (true) {
		let x = 'in block';
		console.log(x);
	}
	x = 'out of block again';
	console.log(x);
}
// mysteryScoping5();



// problem 6
// why does node throw errors for this?
const madLib = (verb, adj, noun) => {
	return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`;
}
madLib("make", "best", "guac");



// ask kelly how he would do this? is using indexOf, includes, match, and test valid ways to solve this algorithm? or woiuld he want to iterate
const isSubstring = (searchString, subString) => {
	return searchString.indexOf(subString) !== -1;
}











