// GCD of Two Numbers (Simple Loop)
// Given two numbers, find their greatest common divisor.

// Input: a = 12, b = 18 → Output: 6
// Input: a = 5, b = 9 → Output: 1
// Input: a = 20, b = 100 → Output: 20

let a = 2;
let b = 10;
let gcd = 1;
for (let i = 1; i <= a && i <= b; i++) {
  if (a % i === 0 && b % i === 0) {
    gcd = i;
  }
}
console.log("GCD =", gcd);
