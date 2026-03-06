//  Double Each Element
// Given an array, return a new array with each element doubled.

// Input: [1, 2, 3] → Output: [2, 4, 6]
// Input: [5, -2] → Output: [10, -4]
// Input: [] → Output: []


// (inbuilt)
// let arr = [1,2,3,4];
// let res = arr.map(n=>n*2);
// console.log(res)

//(manually)
let arr = [1,2,3];
let sum = []
for(let i=0;i<arr.length;i++){
   sum.push(arr[i]*2)
}
console.log(sum)