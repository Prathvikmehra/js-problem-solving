//  Maximum in Array
// Given an array, find the maximum element.

// Input: [3, 7, 2, 9] → Output: 9
// Input: [-5, -2, -10] → Output: -2
// Input: [42] → Output: 42



// (inbuilt)
function maxWithSort(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}


// (inbuilt)
function maxInArray(arr) {
    return Math.max(...arr);
}

// (manually)
function maxWithLoop(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}