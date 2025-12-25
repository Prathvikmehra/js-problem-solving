//  Grade Calculator
// Given marks 0–100, print grade.

// Example mapping:

// 90–100 → A

// 80–89 → B

// 70–79 → C

// 60–69 → D

// 0–59 → F

// Input: marks = 92 → Output: "A"

// Input: marks = 75 → Output: "C"

// Input: marks = 40 → Output: "F"



let marks = 67;
if(marks <=100&&marks>=90){
    console.log("A")
}else if(marks <=89&&marks>=80){
    console.log("B")
}else if(marks <=79&&marks>=70){
    console.log("C")
}else if(marks <=69&&marks>=60){
    console.log("D")
}else if(marks<=59&&marks>=0){
    console.log("F")
}else{
    console.log("the marks are invalid")
}