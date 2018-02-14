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
// mysteryScoping1(); // in block twice

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  
    console.log(x);
  }
  console.log(x);
}
// mysteryScoping2(); // in block - out of block because const is block scoped -- even though its the same name, it wont override x because the second declaration is inside a block thus creating a new scope and totally different x

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
}
// mysteryScoping3(); // throw error because var is not block scope and cant create another x since it was defined w const

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
}
mysteryScoping4(); // in block then out of block -- let is also block scoped so both x's are different from one another

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}
mysteryScoping5(); // throw error because x was already defined on first line using keyword let -- you can't override outside of block



// problem 6
// why does node throw errors for this?
const madLib = (verb, adj, noun) => {
	return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`;
}
// madLib("make", "best", "guac");



// problem 7
// ask kelly how he would do this? is using indexOf, includes, match, and test valid ways to solve this algorithm? or would he want to iterate
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
	let result = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
	callback(result);
}
const printNames = (names) => {
	names.forEach((name) => {
		console.log(name);
	});
}
// titleize(["Mary", "Brian", "Leo"], printNames);
// OR
// titleize(["Mary", "Brian", "Leo"], (names) => {
// 	names.forEach(name => console.log(name));
// });



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
const bfastOrder = dinerBreakfast();
bfastOrder();
bfastOrder("weed");
bfastOrder("grits");
bfastOrder("tortas, not the food");