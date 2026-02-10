//  Print All Elements of an Array
// Given an array, print each element.

// Input: [1, 2, 3] → Output: 1 2 3
// Input: ["a", "b", "c"] → Output: a b c
// Input: [] → Output: (nothing printed)


let arr = [1,2,3];
console.log(...arr);

// (inbuilt)
let arr1 = [1,2,3];
let output = ""
output+=arr1.join(' ')
console.log(output)

// (manually)
let arr2 = [1,2,3];
let output3 = "";
for (let i=0;i<arr2.length;i++){
output3=output3+arr2[i]+" ";
}
console.log(output3)