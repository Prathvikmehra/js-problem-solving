// Print Only Negative Numbers
// Given an array, print only negative numbers.

// Input: [-1, 0, 5, 3, -2] → Output: -1 -2
// Input: [1, 2, 3] → Output: (nothing)
// Input: [-5, -2] → Output: -5 -2

let arr = [1,2,3,4,5,5,6,-2,-32];
let win = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        win+=arr[i]+" ";
    }
}
console.log(win)
