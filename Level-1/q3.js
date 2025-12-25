// Maximum of Three Numbers
// Given three numbers, print the largest.

// Input: a = 3, b = 7, c = 5 → Output: 7
// Input: a = 10, b = 2, c = 10 → Output: 10
// Input: a = -1, b = -5, c = -3 → Output: -1

let num1 = 3
let num2 = 5
let num3 = 7

if(num1>num2&&num2>num3){
    console.log(num1)
}else if(num2>num1&&num1>num3){
    console.log(num2)
}else{
    console.log(num3)
}