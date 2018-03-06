Array.prototype.myEach = function(callback){
	for(let i = 0; i < this.length; i++){
		callback(this[i]);
	}
}
let nums = [1,2,3,4,5];
// nums.myEach(el => console.log(el));



// Kelly -- is this what is expected from the HW? It said to use the 'myEach' method I previously created above but I wasn't sure how to do that
Array.prototype.myMap = function(callback){
	let result = [];
	for(let i = 0; i < this.length; i++){
		result.push(callback(this[i]));
	}
	return result;
}
let rappers = ['biggy smalls', 'jay z', 'nas', 'ghostface'];
let squares = [1,4,9,16];
let newRappers = rappers.myMap(el => {
	return el.length > 5;
});
let newSquares = squares.myMap(el => {
	return Math.sqrt(el);
});
// console.log(newRappers);
// console.log(newSquares);



// Kelly - I understand how .reduce works but not this implementation I found online. Can you explain the callback.call and why it needs 3 arguments
Array.prototype.myReduce = function(callback, initialValue){
	let accumulator = (initialValue === undefined) ? undefined : initialValue;
	for(let i = 0; i < this.length; i++){
		if(accumulator !== undefined){
			accumulator = callback.call(null, accumulator, this[i]);
		} else {
			accumulator = this[i];
		}
	}
	return accumulator;
}
let reduceNums = [20, 20, 2, 3];
let sum = reduceNums.myReduce((a, b) => {
	return a + b;
});
console.log(sum) // should be 45
let sumInitial = reduceNums.myReduce((a, b) => {
	return a + b;
}, 10);
console.log(sumInitial) // should be 55
