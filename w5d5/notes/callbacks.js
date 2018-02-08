// An asynchronous function does not wait for work to be completed -- It schedules work to be done in the background
// Asynchronous functions tend to be used when work may take a variable amount of time:
	// Timers
		// Waits a specified amount of time.
	// Background web requests (AJAX)
		// Makes a possibly slow connection to a server that may live far away.
		// Will pass the fetched data to the callback when the response eventually comes in.
	// Events
		// Example: there's a button on the page. We want to run a function when the user clicks it -- click event
		// We install a click handler. A click handler is a callback that is invoked when a click occurs.
		// We don't know how long it will be before the click happens, but if and when a click actually occurs, the callback will have been stored and will be run.

// Async functions do not return meaningful values: we give them a callback so that the result of the async operation can be communicated back to us
// The below function will:
	// 1. print the prompt
	// 2. Ask node.js to read a line from stdin
	// 3. question is asynchronous; it will not wait for the input to be read, it returns immediately
	// 4. When Node.js has received the input from the user, it will call the callback we passed to reader.question

// const readline = require('readline');

// const reader = readline.createInterface({
// 	// it's okay if this part is magic; it just says that we want to
// 	// 1. output the prompt to the standard output (console)
// 	// 2. read input from the standard input (again, console)

// 	input: process.stdin,
// 	output: process.stdout
// });

// reader.question("What is your name?", function (answer) {
// 	console.log(`Hello ${answer}!`);
// 	reader.close();
// });

// console.log("Last program line");

// const readline2 = require('readline');

// const reader2 = readline2.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// function addTwoNumbers(callback){
// 	reader2.question("Enter #1: ", function(one){
// 		reader2.question("Enter #2: ", function(two){
// 			const num1 = parseInt(one);
// 			const num2 = parseInt(two);
// 			callback(num1 + num2);
// 		});
// 	});
// }

// addTwoNumbers(function(result){
// 	console.log(`The result is: ${result}`);
// 	reader.close();
// });

// This is a weird way to run the times function
// function absurdTimes(numTimes, fn) {
// 	let i = 0;

// 	function loopStep() {
// 		if (i === numTimes) {
// 			// we're done, stop looping
// 			return;
// 		}
// 		fn(i);
// 		i++;
// 		// recursively call loopStep
// 		loopStep();
// 	}
// 	loopStep();
// }
// absurdTimes(10, function(el){
// 	console.log(el);
// });



// Explain code below to Kelly to make sure you understand
// 1. absurdTimesAsync is being invoked at the end of the file with the amount of loops (3) and two callback functions
// 2. Inside the absurdTimesAsync function, loopStep is invoked at the last line
	// - i is incremented to 1
	// - addTwoNumbersAndIncrementAsync is then invoked inside loopStep function with loopStep passed as its callback --> fnAsync(loopStep);
// 3. Inside addTwoNumbersAndIncrementAsync function, addTwoNumbersAsync function is inovoked with anonymous callback function
// 4. This prints to the screen to 'Enter #1' + 'Enter #2' and returns the value to the anonymous callback
	// - it then adds the return value to the global totalSum variable
	// - it then prints 'Sum: ' and 'Total sum: '
// 5. The original loopStep callback from Step 2 is invoked again repeating the cycle
// 6. This continues for the specified amount of numTimes passed
// 7. Once i === numTimes, the completionFn (outputResultAndCloseReader) is invoked which prints the total sum and exits the program
const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function absurdTimesAsync (numTimes, fnAsync, completionFn) {
	let i = 0;

	function loopStep () {
		if (i == numTimes) {
			// we're done, stop looping
			completionFn();
			return;
		}
		i++;
		// fnAsync is an asynchronous function that takes a callback (in this case loopStep)
		fnAsync(loopStep);
	}
	loopStep();
}

function addTwoNumbersAsync(callback) {
  reader.question("Enter #1: ", function (numString1) {
    reader.question("Enter #2: ", function (numString2) {
      const num1 = parseInt(numString1);
      const num2 = parseInt(numString2);

      callback(num1 + num2);
    });
  });
}

let totalSum = 0;

function addTwoNumbersAndIncrementAsync(callback) {
  addTwoNumbersAsync(function (result) {
    totalSum += result;

    console.log(`Sum: ${result}`);
    console.log(`Total Sum: ${totalSum}`);

    callback();
  });
}

function outputResultAndCloseReader () {
  console.log(`All done! Total Sum: ${totalSum}`);
  reader.close();
}

absurdTimesAsync(3, addTwoNumbersAndIncrementAsync, outputResultAndCloseReader);

const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function loopDat(num, asyncFn, completionFn){
	let i = 0;
	function loopStep(){
		if(i === num){
			completionFn();
			return;
		}
		i++;
		asyncFn(loopStep);
	}
	loopStep();
}

let totalSum = 0;

function gatherUserData(callback){
	reader.question("Enter a number: ", function(first){
		reader.question("Enter another number: ", function(second){
			const one = parseInt(first);
			const two = parseInt(second);
			callback(one + two);
		})
	})
}

function gatherUserDataAsync(callback){
	gatherUserData(function(result){
		totalSum += result;
		console.log(`Sum: ${result}`);
		console.log(`Total Sum: ${totalSum}`);
		callback();
	});
}

function completeProgram(){
	console.log(`All done calculating! Your total sum is ${totalSum}`);
	reader.close();
}

loopDat(3, gatherUserDataAsync, completeProgram)
