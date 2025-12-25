//  Palindrome Number
// Check if a number reads same forwards and backwards.

// Input: n = 121 → Output: true (or "palindrome")
// Input: n = 123 → Output: false
// Input: n = 0 → Output: true

let n = 0;
let temp = n;
let rev = 0;
while(n>0){
  let digit = n % 10;
  rev = rev * 10 + digit;
  n = Math.floor(n / 10);
}
if(temp == rev){
  console.log(true)
}else{
  console.log(false)
}