// Print Only Positive Numbers
// Given an array, print only positive numbers.

// Input: [-1, 0, 5, 3, -2] → Output: 5 3
// Input: [1, 2, 3] → Output: 1 2 3
// Input: [-5, -2] → Output: (nothing)

// (using filter)
let arr = [-1,-2,-3,3,2,1];
let res = arr.filter(n=>n>0);
console.log(...res)

// (manually)
let arr1 = [1,2,3,4,5,5,6,-2,-32];
let win = [];
for(let i=0;i<arr1.length;i++){
    if(arr1[i]>0){
        win+=arr1[i]+" ";
    }
}
console.log(win)