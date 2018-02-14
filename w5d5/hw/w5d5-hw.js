// W5D5 HOMEWORK

// window.setTimeout(function(){
// 	alert('HAMMERTIME!');
// }, 5000);

// const hammerTime = (time) => {
// 	window.setTimeout(function(){
// 		alert(`${time} is HAMMERTIME!`);
// 	});
// }

// hammerTime("11am"); // 11am is HAMMERTIME!

const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Either below teaAndBiscuits functions work
function teaAndBiscuits(){
	reader.question("Would you like some tea? Please respond with 'Yes' or 'No': ", (tea) => {
		console.log(`You replied ${tea}.`);
		reader.question("Would you like some biscuits? Please respond with 'Yes' or 'No': ", (biscuit) => {
			console.log(`You replied ${biscuit}.`);
			const firstResponse = (tea === 'yes') ? 'do' : 'don\'t';
			const secondResponse = (biscuit === 'yes') ? 'do' : 'don\'t';
			console.log(`So you ${firstResponse} want tea and you ${secondResponse} want biscuits.`);
			reader.close();
		});
	});
}
// teaAndBiscuits();

// function teaAndBiscuits(callback){
// 	reader.question("Would you like some tea? Please respond with 'Yes' or 'No': ", (teaResponse) => {
// 		reader.question("Would you like some biscuits? Please respond with 'Yes' or 'No': ", (biscuitResponse) => {
// 			const first = teaResponse.toLowerCase();
// 			const second = biscuitResponse.toLowerCase();
// 			callback(first, second);
// 		});
// 	});
// }

// teaAndBiscuits(function(first, second){
// 	const firstResponse = (first === 'yes') ? 'do' : 'don\'t';
// 	const secondResponse = (second === 'yes') ? 'do' : 'don\'t';
// 	console.log(`So you ${firstResponse} want tea and you ${secondResponse} want biscuits.`);
// 	reader.close();
// });

function Cat () {
	this.name = 'Markov';
	this.age = 3;
}

function Dog () {
	this.name = 'Noodles';
	this.age = 4;
}

Dog.prototype.chase = function (cat) {
	console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};

const markov = new Cat ();
const noodles = new Dog ();

// noodles.chase(markov);
// noodles.chase.call(markov, noodles);
// noodles.chase.apply(markov, [noodles]);
// noodles.chase.bind(markov)(noodles);