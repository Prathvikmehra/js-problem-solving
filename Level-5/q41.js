// Count Words in a Sentence
// Given a sentence, count how many words it has (split by spaces, ignore extra spaces if you want).

// Input: "Hello world" → Output: 2
// Input: "JavaScript is fun" → Output: 3
// Input: "  this   is   spaced  " → Output: 3 (if you ignore multiple spaces)

function countwords(string){
    let count = 0;
    let check = string.trim();
    let arr = string.split(" ");
for(let i = 0;i<arr.length;i++){
    if(arr[i]!==""){
        count++;
    }
}
console.log(count);
}
countwords("    this is the    problem solving lecture      ")


//(manually)
function countwords(string){
let count = 0;
for(let i = 0;i<string.length;i++){
  if(i===0 && string[i]!==" "){
    count++;
  }
   else if(string[i]!==" "&&string[i-1]==" "){
        count++;
    }
}
console.log(count);
}
countwords("  this   is    the    problem    solving    lecture ") ;