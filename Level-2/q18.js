//  Count Numbers Divisible by 3 (1 to N)
// Count how many numbers between 1 and N are divisible by 3.

// Input: N = 10 → Numbers: 3, 6, 9 → Output: 3
// Input: N = 7 → Numbers: 3, 6 → Output: 2
// Input: N = 2 → No numbers → Output: 0

let n = 10;
let count = 0;
for(let i=1;i<=n;i++){
    if(i%2!=0){
        count++
    }else{
        continue
    }
}
console.log(count);