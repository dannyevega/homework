Array.prototype.myEach = function(callback){
	let arr = this;
	for(let i = 0; i < arr.length; i++){
		callback(arr[i]);
	}
}

// Kelly -- is this what is expected from the HW? It said to use the 'myEach' method I previously created but wasn't sure how to do that
Array.prototype.myMap = function(callback){
	let arr = this,
		result = [];
	for(let i = 0; i < arr.length; i++){
		result.push(callback(arr[i]));
	}
	return result;
}