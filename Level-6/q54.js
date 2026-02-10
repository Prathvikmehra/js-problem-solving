// Minimum in Array
// Given an array, find the minimum element.

// Input: [3, 7, 2, 9] → Output: 2
// Input: [-5, -2, -10] → Output: -10
// Input: [42] → Output: 42


(manually)
let arr = [1,2,3,4,-23,23,4,5,3];
let min = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(min);

// (inbuilt)   we use destructure or spread because in math.min or math.max it will consider it a object instead of number
function minArray(arr) {
    return Math.min(...arr);
}

// (inbuilt)
function maxWithSort(arr) {
    arr.sort((a, b) => a - b);
   return arr[0];
}