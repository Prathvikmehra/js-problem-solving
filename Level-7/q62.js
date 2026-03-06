// Square Each Element
// Given an array, return a new array with each element squared.

// Input: [1, 2, 3] → Output: [1, 4, 9]
// Input: [-2, 4] → Output: [4, 16]
// Input: [0] → Output: [0]

// q62(manually)
let arr = [1,2,3];
let sum = []
for(let i=0;i<arr.length;i++){
   sum.push(arr[i]*arr[i])   //arr[i]**2  (you can do it like this too)
}
console.log(sum)
