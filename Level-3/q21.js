// Count Digits in a Number
// Given a number, count how many digits it has. (Ignore sign.)

// Input: n = 0 → Output: 1
// Input: n = 1234 → Output: 4
// Input: n = -98 → Output: 2

//(in built method)
let n = -100;
n = Math.abs(n);
n = String(n);
console.log(n,typeof(n));
let arr =  n.split("");
// console.log(arr);
console.log(arr.length);

// (manually)
 let N = 7873334;
 let count = 0;
 while(N>0){
    count++;
    N = Math.floor(N/10);
}
console.log(count)