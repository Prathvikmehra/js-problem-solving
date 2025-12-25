// LCM of Two Numbers
// Given two numbers, find their least common multiple.

// Input: a = 4, b = 6 → Output: 12
// Input: a = 5, b = 7 → Output: 35
// Input: a = 3, b = 9 → Output: 9


let a = 4;
let b = 6;
let gcd = 1;
for (let i = 1; i <= a && i <= b; i++) {
  if (a % i === 0 && b % i === 0) {
    gcd = i;
  }
}
let lcm = (a*b)/gcd
console.log("Glcm=", lcm);