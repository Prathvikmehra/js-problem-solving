// Divisible by 3 and 5
// Given a number, print if it is divisible by both 3 and 5.

// Input: 15 → Output: "divisible by 3 and 5"
// Input: 30 → Output: "divisible by 3 and 5"
// Input: 9 → Output: "not divisible by both"

let check = 15;
if(check%3==0&&check%5==0){
    console.log("divisible by both")
}else{
    console.log("not divisible by both ")
}