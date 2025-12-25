//  Product 1 to N
// Given N, find product of numbers from 1 to N.

// Input: N = 4 → Output: 24 (1×2×3×4)
// Input: N = 1 → Output: 1
// Input: N = 5 → Output: 120

let n = 4;
let bag = 1;
for(let i=1;i<=n;i++){
    bag*=i;
}
console.log(bag);