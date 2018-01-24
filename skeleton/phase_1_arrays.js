Array.prototype.uniq = function(){
	let arr = this, result = [];
	// Set returns all unique values from an array into an Object --> {1, 2, 3, 4}
	const set = new Set(arr);
	set.forEach(el => {
		result.push(el);
	});
	return result;
}
let arr = new Array(1,2,3,2,1,6);

Array.prototype.twoSum = function(){
	let arr = this, target = 0, map = {}, unique = {}, pairs = [];
	for(let i = 0; i < arr.length; i++){
		let current = arr[i];
		let difference = target - current;
		if(map[difference] !== undefined){
			if(unique[difference] === undefined){
				pairs.push([map[difference], i]);
			}
			unique[difference] = true;
		}
		map[current] = i;
	}
	if(pairs.length === 0){
		return "No pairs found.";
	}
	return pairs;
}

// transpose -- just flip the X and Y coords
