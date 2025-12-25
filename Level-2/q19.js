// Factorial (Iterative)
// Compute N! using a loop.

// Input: N = 5 → Output: 120
// Input: N = 0 → Output: 1 (by definition)
// Input: N = 3 → Output: 6

let n = 5; 
let bag = 1;
if(n == 0){
    console.log("1")
}

for(let i=1;i<=n;i++){
bag*=i;
}
console.log(bag);