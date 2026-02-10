// Average of Array Elements
// Given an array of numbers, find the average.

// Input: [1, 2, 3, 4] → Sum = 10 → Output: 2.5
// Input: [5, 15] → Sum = 20 → Output: 10
// Input: [7] → Output: 7


// (using reduce)
let arr = [1, 2, 3, 4];
let sum = arr.reduce((a, b) => a + b, 0);
let avg = sum / arr.length;
console.log(avg);

// (manually)
let arr1 = [1, 2, 3, 4];
let avg1 = arr1.length;
let sum1 = 0;
for(let i=0;i<arr1.length;i++){
sum1+=arr[i];
}
let res = sum1/avg1;
console.log(res);

