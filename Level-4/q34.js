// Count Consonants
// Count consonants (letters that are not vowels).

// Input: "hello" → Output: 3 (h, l, l)
// Input: "abc" → Output: 2 (b, c)
// Input: "a e i" → Output: 0 (if you ignore spaces, only vowels)

let str = "abc";
let count = 0;
for(let i = 0;i<str.length;i++){
  if(str[i]!=='e'&&str[i]!=='a'&&str[i]!=='i'&&str[i]!=='o'&&str[i]!=='u'){
    count++;
  }
}
console.log(count);



//(inbuilt asscii method)
let Str = "hello"
let Count = 0;
str1  = str.toLowerCase();
for(let char = 1; char<str.length;char++){
    if(str1.charCodeAt(char)==97||
    str1.charCodeAt(char)==101||str1.charCodeAt(char)==105||
    str1.charCodeAt(char)==11||str1.charCodeAt(char)==117){
        continue;
    }else{
        count++;
    }
}
console.log(count);
