// Part 1
function Clock(){
	this.date = new Date();
	this.hours = this.date.getHours();
	this.minutes = this.date.getMinutes();
	this.seconds = this.date.getSeconds();
	this._printTime();
	setInterval(this._tick.bind(this), 1000);
}

// Clarify with Kelly why we need to bind 'this' to this._tick callback invocation --> TypeError: "callback" argument must be a function

Clock.prototype._printTime = function(){
	const timeString = [((this.hours % 24) % 12), this.minutes, this.seconds].join(":");
	console.log(timeString);
}

Clock.prototype._tick = function(){
	this._incrementSeconds();
	this._printTime();
}

Clock.prototype._incrementSeconds = function(){
	this.seconds += 1;
	if(this.seconds === 60){
		this.seconds = 0;
		this._incrementMinutes();
	}
}

Clock.prototype._incrementMinutes = function(){
	this.minutes += 1;
	if(this.minutes === 60){
		this.minutes = 0;
		this._incrementHours();
	}
}

Clock.prototype._incrementHours = function(){
	this.hours = ((this.hours += 1) % 24);
	if(this.hours % 24 === 0){
		this.hours = 12;
	}
}

// const clock = new Clock();



// Part 2
// const readline = require('readline');

// const reader = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback){
// 	if(numsLeft > 0){
// 		reader.question("Fam, give me a number: ", (response) => {
// 			const num = parseInt(response);
// 			sum += num;
// 			console.log(`Partial sum: ${sum}`);
// 			addNumbers(sum, numsLeft - 1, completionCallback);
// 		});
// 	} else {
// 		completionCallback(sum);
// 	}
// }

// addNumbers(0, 3, (sum) => {
// 	console.log(`Total sum: ${sum}`);
// 	reader.close();
// });



// Part 3
// const readline = require('readline');

// const reader = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// function askIfGreaterThan(first, second, callback){
// 	reader.question(`Is ${first} greater than ${second}? `, (res) => {
// 		const response = (res === 'yes') ? true : false;
// 		callback(response);
// 	});
// }

// function innerBubbleSort(arr, i, swapped, outterBubbleSort){
// 	if(i === (arr.length - 1)){
// 		outterBubbleSort(swapped);
// 		return;
// 	} else {
// 		askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
// 			console.log(`swapped: ${swapped}`);
// 			if(isGreaterThan === true){
// 				swapped = true;
// 				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
// 			}
// 			console.log(`swapped: ${swapped}`);
// 			innerBubbleSort(arr, i + 1, swapped, outterBubbleSort);
// 		});
// 	}
// }

// function absurdBubbleSort(arr, completionCallback){
// 	function outterBubbleSort(madeAnySwaps){
// 		if(madeAnySwaps === true){
// 			innerBubbleSort(arr, 0, false, outterBubbleSort);
// 		} else {
// 			completionCallback(arr);
// 		}
// 	}
// 	outterBubbleSort(true);
// }

// absurdBubbleSort([3, 2, 1], function (arr) {
// 	console.log("Sorted array: " + JSON.stringify(arr));
// 	reader.close();
// });



// Part 4
Function.prototype.myBind = function(context){
	return () => this.apply(context);
}

class Lamp {
	constructor() {
		this.name = "a lamp";
	}
}

const turnOn = function() {
	console.log("Turning on " + this.name);
}

const lamp = new Lamp();
turnOn(); // should not work the way we want it to because we don't know what 'this' is refering to -- JS returns undefined since this.name will be saved in memory

const boundTurnOn = turnOn.bind(lamp); // works because were telling turnOn fn what the context of 'this' is using .bind & passing in lamp object
const myBoundTurnOn = turnOn.myBind(lamp); // Clarify with Kelly how this line below works using myBind

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
