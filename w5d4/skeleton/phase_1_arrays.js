Array.prototype.uniq = function(){
	let arr = this, result = [];
	// Set returns all unique values from an array into an Object --> {1, 2, 3, 4}
	const set = new Set(arr);
	// iterate thru set and push valus into array -- cant use .map on a Set
	set.forEach(el => {
		result.push(el);
	});
	// return result
	return result;
}
let uniqArr = new Array(1,2,3,2,1,6);
// console.log(uniqArr.uniq());

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
let twoSumArr = new Array(1,3,4,-1,6,-3,7);
// console.log(twoSumArr.twoSum());

// transpose -- just flip the X and Y coords
Array.prototype.transpose = function(){
	// width = amount of subarrays in each 2D array -- [[1,2,3],[1,2,3]] --> 2
	// length = amount of elements within each subarray -- [1,2,3] --> 3
	let arr = this,
		width = arr.length,
		length = arr[0].length,
		transposed = [];
		// iterate up to length since you want each element in each subarray
	for(let i = 0; i < length; i++){
		// create empty array for each new subarray
		transposed[i] = [];
		// iterate thru width of array since you want each new subarray to contain same amount of elements as there are sub arrays i.e. [1,1], [2,2], [3,3]
		for(let j = 0; j < width; j++){
			transposed[i][j] = arr[j][i];
		}
	}
	return transposed;
}
let transposeArr = [[1,2,3],[1,2,3]];
// console.log(transposeArr.transpose());
