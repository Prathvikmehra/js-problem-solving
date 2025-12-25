//  Sum of Digits
// Given a number, find sum of its digits.

// Input: n = 123 → Output: 6 (1+2+3)
// Input: n = 505 → Output: 10 (5+0+5)
// Input: n = 9 → Output: 9


let n=123;
let sum = 0;
while(n>0){
    let count = n%10;
    sum+=count;
  n = Math.floor(n/10);
}
console.log(sum)