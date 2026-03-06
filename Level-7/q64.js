// Copy Array
// Given an array, create an exact copy.

// Input: [1, 2, 3] → Output: [1, 2, 3]
// Input: [] → Output: []
// Input: ["x", "y"] → Output: ["x", "y"]


// (inbuilt) destructure breaks the array and spread just expands it 
let arr = [1,2,3,4]
let arr1 = [];
arr1.push(...arr) //<= this is spread
console.log(arr1)

// // (inbuilt)
// let arr=[1,2,3,4]
// let copyarr = new Array(...arr);  // this creates a new arr and we use spread because if we dont use spread it will give an arr inside an arr
// console.log(copyarr)

// // (manually)
// let arr = [1,2,3,4];
// let arr1 = [];
// for(let i=0;i<arr.length;i++){
//     arr1.push(arr[i]);
// }
// console.log(arr1);
