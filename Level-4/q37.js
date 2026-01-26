// Reverse a String
// Reverse all characters in the string.

// Input: "hello" → Output: "olleh"
// Input: "abc" → Output: "cba"
// Input: "a" → Output: "a"

let str = 'hello';
let rev = str.split("").reverse().join("");
console.log(rev)


//(manually)
let Str= "hello";
let res = "";
for(let i = str.length-1;i>=0;i--){
   res = res+str[i];
}
console.log(res)