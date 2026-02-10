//  Count Odd Numbers in Array
// Given an array of integers, count odd numbers.

// Input: [1, 2, 3, 4, 5] → Output: 3 (1,3,5)
// Input: [2, 4, 6] → Output: 0
// Input: [7, 9] → Output: 2

let arr = [1,2,3,4,5,6,7,8,1212];
let count = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        count++;
    }
}
console.log(count);