// sum using Arguments
// Ask Kelly why ES6 version of fn isn't returning whats expected, it prints native JS code when I log the result but line 12 function works as expected
const constSum = () => {
	let sum = 0;
	for(let i = 0; i < arguments.length; i++){
		sum += arguments[i];
	}
	return sum;
}
let constResult = constSum(1,2,3,4);
// console.log(constResult);

function sum(){
	let sum = 0;
	for(let i = 0; i < arguments.length; i++){
		sum += arguments[i];
	}
	return sum;
}
let result = sum(1,2,3,4);
// console.log(result);

function restSum(...args){
	let sum = 0;
	args.forEach((el) => {
		sum += el;
	});
	return sum;
}
let restArgs = sum(1,2,3,4,5);
// console.log(restArgs);


// ----------------------------------------------------------------------------------------------------------------------------------------


// bind with Arguments
// Ask Kelly what bind-time and call-time arguments mean
Function.prototype.myBind = function(context){
	return () => this.apply(context);
}

function Cat(name){
	this.name = name;
}

Cat.prototype.says = function(sound, person){
	console.log(`${this.name} says ${sound} to ${person}!`);
	return true;
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");
// console.log(markov.says("meow, fam", "Joe"));

// I dont understand this -- Ask Kelly to go over it with me
Function.prototype.myBind = function (ctx) {
  const fn = this;
  // from my understanding, this is basically doing what rest operator does, slicing off the first elements and giving us the rest
  const bindArgs = Array.from(arguments).slice(1);
  return function (){
  	// Array.from allows us to perform Array mthods on the array like arguments
    const callArgs = Array.from(arguments);
    // were saying this.apply passing in the context but I'm not sure why were concatinating the arguments minus the first element with all the arguments?
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
}

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

// bind time args are "meow" and "Kush", no call time args
console.log(markov.says.myBind(breakfast, "meow", "Kush")());
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
console.log(markov.says.myBind(breakfast)("meow", "a tree"));
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
console.log(markov.says.myBind(breakfast, "meow")("Markov"));
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
// console.log(notMarkovSays("meow", "me"));
// Breakfast says meow to me!
// true

function nums(){
	const bindArgs = Array.from(arguments).slice(1);
	const callArgs = Array.from(arguments);
	console.log(`bindArgs: ${bindArgs}`);
	console.log(`callArgs: ${callArgs}`);
}
// nums(1,2,3,4,5);


// ----------------------------------------------------------------------------------------------------------------------------------------


// curriedSum
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// console.log(sumThree(4, 20, 6));

const curriedSum = (numArgs) => {
	const numbers = [];
	function _curriedSum(singleNum){
		numbers.push(singleNum);
		// console.log(numbers); --> to see what is pushed in the numbers array at each stack
		if(numbers.length === numArgs){
			let total = 0;
			numbers.forEach(num => {
				total += num;
			});
			return total;
		} else {
			return _curriedSum;
		}
	}
	return _curriedSum;
}
// const currSum = curriedSum(4);
// console.log("here " + currSum(5)(30)(20)(1));
// console.log(curriedSum(4)(5)(30)(20)(1));

// using the spread operator
Function.prototype.curry = function(numArgs){
	const args = [];
	const fn = this;
	function _curriedFn(arg){
		args.push(arg);
		if(args.length === numArgs){
			return fn(...args);
		} else {
			return _curriedFn;
		}
	}
	return _curriedFn;
}

Function.prototype.curry = function(numArgs){
	const args = [];
	const fn = this;
	function _curriedFn(arg){
		args.push(arg);
		if(args.length === numArgs){
			// ask why we need to pass in null to .apply
			// we need to pass in a context to .apply and it doesnt matter what the context is -- null is way to tell devs we dont care about context
			return fn.apply(null, args);
		} else {
			return _curriedFn;
		}
	}
	return _curriedFn;
}
// Won't work, need to write curry function
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
// console.log(f1);

// or more briefly:
// console.log(sumThree.curry(3)(4)(20)(6))// == 30
