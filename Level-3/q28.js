//  First N Fibonacci Numbers
// Print first N Fibonacci numbers. (Start: 0, 1, 1, 2, 3, …)

// Input: N = 5 → Output: 0 1 1 2 3
// Input: N = 1 → Output: 0
// Input: N = 7 → Output: 0 1 1 2 3 5 8



let n = 5;
let a = 0;
let b = 1;
if (n >= 1) {
  console.log(a);
}
if (n >= 2) {
  console.log(b);
}
for (let i = 3; i <= n; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}