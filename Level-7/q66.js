//  Find Index of a Value
// Given an array and a value, return index or -1.

// Input: [10, 20, 30], value = 20 → Output: 1
// Input: [10, 20, 30], value = 40 → Output: -1
// Input: ["a", "b"], value = "b" → Output: 1


// (inbuilt)we have indexOf and lastIndexOf method and in lastIndexOf we start from end and it gives the index of that number from the last
let arr = [1,2,3,4];
console.log(arr.indexOf(1))

//(manually)
function findIndexLoop(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}