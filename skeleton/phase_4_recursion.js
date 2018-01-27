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
// console.log(range(1, 5)); // [1, 2, 3, 4, 5]

const recursiveSum = (nums) => {
	let result = nums[0];
	function helper(index){
		if(index === nums.length){
			return;
		} else {
			result += nums[index];
			helper(index + 1);
		}
	}
	helper(1);
	return result;
}
let arr = [1,2,3,4,5];
// console.log(recursiveSum(arr)); // 15

const exponent = (base, exp) => {
	if(exp === 0){
		return 1;
	}
	return base * exponent(base, exp - 1);
}
// console.log(exponent(2,3)); // 8

const fibonacci = (num) => {
	var fibs = [0,1];
	if(num === 0) { return []; }
	function helper(index){
		if(index > num){
			return;
		} else {
			fibs[index] = fibs[index - 2] + fibs[index - 1];
			helper(index + 1);
		}
	}
	helper(2);
	fibs.splice(fibs.length - 1)
	return fibs;
}
// console.log(fibonacci(5));

// what is deep dup?
// const deepDup = (int) => {
	
// }

const binarySearch = (arr, target) => {
	let middle;
	function helper(start, end){
		if(start > end){
			return - 1;
		} else {
			middle = Math.floor((start + end) / 2);
			if(target === arr[middle]){
				return middle;
			} else if(target < arr[middle]){
				return helper(start, middle - 1);
			} else {
				return helper(middle + 1, end);
			}
		}
	}
	return helper(0, arr.length - 1);
}
// console.log(binarySearch([2,4,7,12,15,20,24], 20)); // 5

const mergeSort = (arr) => {
	let result = [], leftCount = 0, rightCount = 0, left, middle, right;

	if(arr.length < 2){
		return arr;
	}

	middle = Math.floor(arr.length / 2);
	left = mergeSort(arr.slice(0, middle));
	right = mergeSort(arr.slice(middle));

	while(leftCount < left.length && rightCount < right.length){
		if(left[leftCount] < right[rightCount]){
			result.push(left[leftCount]);
			leftCount++
		} else {
			result.push(right[rightCount]);
			rightCount++;
		}
	}
	return result.concat(left.slice(leftCount).concat(right.slice(rightCount)));
}
// console.log(mergeSort([14,33,27,10,35,19,42,44])); // [ 10, 14, 19, 27, 33, 35, 42, 44 ]

// const subsets = (arr) => {
	
// }





























