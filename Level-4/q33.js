// Count Vowels
// Count vowels (a, e, i, o, u – you can decide if you treat uppercase as vowel too).

// Input: "hello" → Output: 2 (e, o)
// Input: "JAVASCRIPT" → Output: 3 (A, A, I – if case-insensitive)
// Input: "sky" → Output: 0

let str = "hello";
let count = 0;
for(let i = 0;i<str.length;i++){
  if(str[i]=='e'||str[i]=='a'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
    count++;
  }
}
console.log(count);

//(inbuilt method)
let Str = "hello"
let str1 = "aeiouAEIOU"
let Count = 0;
for(let i = 0;i<=str.length;i++){
    if(str1.includes(str[i])){
        count++
    }
}
console.log(count)
