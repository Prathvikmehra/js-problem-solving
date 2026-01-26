// Length of String
// Print length of a string.

// Input: "hello" → Output: 5
// Input: "" → Output: 0
// Input: "JavaScript" → Output: 10


//(inbuilt method)
let str = '';
console.log(str.length);


//(manually)
let a = "hello";
let b = a.split("");
let count = 0;
for(let i = 1;i<=b.length;i++){
  if(b[i] !=""){
      count++;
  }
}
console.log(count)