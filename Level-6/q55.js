// Count Even Numbers in Array
// Given an array of integers, count even numbers.

// Input: [1, 2, 3, 4, 5, 6] → Output: 3 (2,4,6)
// Input: [1, 3, 5] → Output: 0
// Input: [2, 4, 8] → Output: 3

// (manually)
let arr = [1,2,3,4,5,6,7,8,1212];
let count = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        count++;
    }
}
console.log(count);