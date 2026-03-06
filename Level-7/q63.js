// Reverse Array into New Array
// Given an array, create a new array which is the reverse.

// Input: [1, 2, 3] → Output: [3, 2, 1]
// Input: ["a", "b", "c"] → Output: ["c", "b", "a"]
// Input: [7] → Output: [7]


// q63(manually)
let arr1 = [1,2,3];
let rev = []
for(let i=arr1.length-1;i>=0;i--){
    rev.push(arr1[i]);
}
console.log(rev);


// (2 pointer method)
let arr = [1,2,4,3]
let i=0;
let j=arr.length-1;
while(i<=j){
    [arr[i],arr[j]]=[arr[j],arr[i]];
    j--;
    i++;
}
console.log(arr);