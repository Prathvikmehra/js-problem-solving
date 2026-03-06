// Frequency of a Value
// Given an array and a value, count how many times value appears.

// Input: [1, 2, 2, 3, 2], value = 2 → Output: 3
// Input: [5, 5, 5], value = 5 → Output: 3
// Input: [1, 2, 3], value = 4 → Output: 0/


// (manually)
let arr = [1, 2, 2, 3, 2];
let value = 2;
let count = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==value){
        count++
    }
}
console.log(count)

// (using object)
// let arr = [1,2,2,3,2];
// let value = 2;
// let obj = {};
// for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]!=undefined){
//         obj[arr[i]]++
//     }else{
//         obj[arr[i]] = 1;

//     }
// }
// console.log(obj[value])