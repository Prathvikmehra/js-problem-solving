// Second Smallest Element
// Assume array has at least 2 distinct elements.

// Input: [10, 5, 8, 20] → Smallest = 5 → Second smallest = 8
// Input: [3, 1, 2] → Output: 2
// Input: [100, 50] → Output: 100



let arr = [10, 5, 8, 20];
let smallest = Infinity;
let secondSmallest = Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
    }
    else if (arr[i] < secondSmallest && arr[i] > smallest) {
        secondSmallest = arr[i];
    }
}
console.log(secondSmallest);