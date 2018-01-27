const range = (start, end) => {
	let result = [start];
	function helper(index){
		if(index > end){
			return;
		} else {
			result.push(index);
			helper(index + 1);
		}
	}
	helper(start + 1);
	return result;
}
console.log(range(1, 5)); // [1, 2, 3, 4, 5]

const exponent = (base, exp) => {
	if(exp === 0){
		return 1;
	}
	return base * exponent(base, exp - 1);
}
console.log(exponent(2,3)); // 8