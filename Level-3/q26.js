// Prime Number (Simple Check)
// Given a number, check if it is prime.

// Input: n = 2 → Output: true
// Input: n = 17 → Output: true
// Input: n = 15 → Output: false


let n = 17;
let isPrime = true;
if (n <= 1) {
  isPrime = false;
}
else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime);
