// Product of Digits
// Given a number, find product of its digits.

// Input: n = 123 → Output: 6 (1×2×3)
// Input: n = 505 → Output: 0 (5×0×5)
// Input: n = 46 → Output: 24 (4×6)

let n=46;
let sum = 1;
while(n>0){
    let count = n%10;
    sum*=count;
  n = Math.floor(n/10);
}
console.log(sum)