//  Odd Numbers 1 to N
// Print all odd numbers from 1 to N.

// Input: N = 10 → Output: 1 3 5 7 9
// Input: N = 5 → Output: 1 3 5
// Input: N = 1 → Output: 1

let n =13;
let bag = "";
for(let i=1;i<=n;i++){
if(i%2!=0){
    bag+=i+" "
}
}
console.log(bag)
