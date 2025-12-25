// Reverse a Number
// Given a number, print its reverse.

// Input: n = 1234 → Output: 4321
// Input: n = 100 → Output: 1 (leading zeros dropped)
// Input: n = -321 → Output: -123 (if you handle sign)


let n = -321;
let original = n;
let rev = 0;
if (n < 0){
  n = -n;
}
while (n > 0) {
    let digit = n % 10;
    rev = rev * 10 + digit;
    n = Math.floor(n / 10);
}
if (original < 0) {
  rev = -rev;
}
console.log(rev);


//(inbuilt method)
let N = -321;
let isNegative = N < 0;
N = String(Math.abs(N));
let reversed = N.split("").reverse().join("");
reversed = Number(reversed);
if (isNegative) reversed = -reversed;
console.log(reversed);