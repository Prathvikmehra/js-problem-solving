// Print Elements Greater than 10
// Given an array, print elements greater than 10.

// Input: [5, 12, 7, 20, 3] → Output: 12 20
// Input: [10, 11, 9] → Output: 11
// Input: [1, 2, 3] → Output: (nothing)

let arr=[1,2,3,45,292,2]
for(let i=0;i<arr.length;i++){
    if(arr[i]>10){
        console.log(arr[i]);
    }
}
