// First N Multiples of 7
// Print first N multiples of 7.

// Input: N = 3 → Output: 7 14 21
// Input: N = 5 → Output: 7 14 21 28 35
// Input: N = 1 → Output: 7


let n = 3;
let num = 7;
let bag = "";
for(let i=1;i<=n;i++){
bag+=num*i+' '
}
console.log(bag)