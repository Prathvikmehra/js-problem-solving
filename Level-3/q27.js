// All Primes from 1 to N
// Print all prime numbers from 1 to N.

// Input: N = 10 → Output: 2 3 5 7
// Input: N = 5 → Output: 2 3 5
// Input: N = 2 → Output: 2

let N = 10;
for (let num = 2; num <= N; num++) {
  let isPrime = true;
  // check if num is divisible by any number from 2 to num-1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}