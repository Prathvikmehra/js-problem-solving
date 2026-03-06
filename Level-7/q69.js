//  Second Largest Element
// Assume array has at least 2 distinct elements.

// Input: [10, 5, 8, 20] → Largest = 20 → Second largest = 10
// Input: [3, 1, 2] → Output: 2
// Input: [100, 50] → Output: 50



let arr = [1,2,3,4,5,6];
let max=-Infinity;
let smax=-Infinity ;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}

for(let i=0;i<arr.length;i++){
    if(arr[i]>smax&&arr[i]<max){
        smax=arr[i];
    }
}
console.log(smax);

// (inbuilt)
// let arr = [10, 5, 8, 20];
// arr.sort((a, b) => b - a);
// console.log(arr[1]);

// (in one for loop)
// let arr = [100, 1-1, -1, 1, 2, 3, 78, 99];
// let max = -Infinity;
// let smax = -Infinity;

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > max) {
//         smax = max;
//         max = arr[i];
//     }
//     else if (arr[i] > smax && arr[i] < max) {
//         smax = arr[i];
//     }
// }
// console.log(smax);
