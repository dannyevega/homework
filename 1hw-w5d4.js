// Part 1
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
// madLib("make", "best", "guac");



// problem 7
// ask kelly how he would do this? is using indexOf, includes, match, and test valid ways to solve this algorithm? or woiuld he want to iterate
const isSubstring = (searchString, subString) => {
	return searchString.indexOf(subString) !== -1;
}



// problem 8
const fizzBuzz = (arr) => {
	let result = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
			continue;
		} else if(arr[i] % 3 === 0 || arr[i] % 5 === 0){
			result.push(arr[i]);
		}
	}
	return result;
}



// problem 9
const isPrime = (num) => {
	for(let i = 2; i * i <= num; i++){
		if(num % i === 0){
			return false;
		}
	}
	return true;
}

// skipped problem 10


-------------------------------------------------------------------------------------------------------------------------------------


// Part 2
// problem 1
const titleize = (names, callback) => {
	let result = [];
	for(let i = 0; i < names.length; i++){
		result.push(`Mx. ${names[i]} Jingleheimer Schmidt`)
	}
	callback(result);
}
const printNames = (names) => {
	names.forEach((name) => {
		console.log(name);
	});
}
// titleize(["Mary", "Brian", "Leo"], printNames);

// is the below function an acceptable callback?
const titleize = (names) => {
	let result = [];
	for(let i = 0; i < names.length; i++){
		result.push(`Mx. ${names[i]} Jingleheimer Schmidt`)
	}
	result.forEach((name) => {
		console.log(name);
	})
}


// problem 2
function Elephant(name, height, tricks){
	this.name = name;
	this.height = height;
	this.tricks = tricks;
}
Elephant.prototype.trumpet = function(){
	console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}
Elephant.prototype.grow = function(){
	return this.height += 12;
}
Elephant.prototype.addTrick = function(trick){
	this.tricks.push(trick);
	return trick;
}
Elephant.prototype.play = function(){
	let random = Math.floor(Math.random() * this.tricks.length);
	return `${this.name} is ${this.tricks[random]}!`;
}
let babyElephant = new Elephant("Harry", 62, ["painting a picture", "crying", "eating fruit"]);
// babyElephant.trumpet();
// babyElephant.grow();
// console.log(babyElephant.height); // should be 74
// babyElephant.addTrick("rolling down a hill");
// console.log(babyElephant.tricks); // should have added "rolling down a hill"
// babyElephant.play();



// problem 3
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);
let herd = [ellie, charlie, kate, micah];

// option 1 -- is this correct?
Elephant.prototype.paradeHelper = function(elephant){
	return `${elephant.name} is trotting by!`;
}
herd.forEach((elephant) => {
	console.log(elephant.paradeHelper());
});

// option 2 -- is this correct?
Elephant.paradeHelper = function(elephant){
	return `${elephant.name} is trotting by!`;
}
herd.forEach((elephant) => {
	console.log(Elephant.paradeHelper(elephant));
});



// problem 4
const dinerBreakfast = () => {
	let order = "I'd like some scrambled eggs & bacon";
	return (add) => {
		if(add){
			order = `${order} & ${add}`;
		}
		console.log(order);
	}
}
