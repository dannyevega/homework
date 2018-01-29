// bubbleSort
Array.prototype.bubbleSort = function(){
	let i, j, limit = this.length, changed = false;
	while(limit--){
		for(i = 0, j = 1; i < limit; i++, j++){
			if(this[i] > this[j]){
				changed = true;
				[this[i], this[j]] = [this[j], this[i]];
			}
		}
		if(!changed){
			return this;
		}
	}
	return this;
}
let arr = [12,5,9,11,19,3];
// console.log(arr.bubbleSort()); // [ 3, 5, 9, 11, 12, 19 ]



// String substrings
String.prototype.substrings = function(){
	let map = {}, result = [];
	for(let i = 0; i < this.length; i++){
		for(let j = i + 1; j <= this.length; j++){
			let current = this.slice(i, j);
			if(map[current] === undefined){
				result.push(current);
			}
			map[current] = true;
        }
    }
    return result;
}
let str = "aab";
// console.log(str.substrings()); // ["a", "aa", "aab", "ab", "b"]
