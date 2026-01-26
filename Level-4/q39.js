// Count Occurrences of 'a'
// Count how many times 'a' (or 'A') appears.

// Input: "banana" → Output: 3
// Input: "Apple" → Output: 1 (if case-insensitive, a only)
// Input: "xyz" → Output: 0

let str = "Aaplle";
let count = 0;
for(let i = 0;i<str.length;i++){
    let code = str.charCodeAt(i);
    if(code==65 || code==97){
        count++;
    }
    }
console.log(count)

//(second method )
let Str = "apple";
let Count = 0;
let res = str.split("");
res.forEach((char)=>{
    if(char == "a"||char == "A"){
        count++;
    }
})
console.log(count)
