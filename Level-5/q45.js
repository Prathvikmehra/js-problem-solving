// Count Digits in a String
// Given a string, count how many characters are digits (0–9).

// Input: "abc123" → Output: 3
// Input: "2025 year" → Output: 4 (2,0,2,5)
// Input: "no digits" → Output: 0

let num = "123abcherh893810";
let rev = num.split("");
let count = 0;
let arr  = ['0','1','2','3','4','5','6','7','8','9'];
for(let i = 0;i<rev.length;i++){
 for(let j = 0;j<arr.length;j++){
    if(rev[i]==arr[j]){
        count++;
    }
 }
}
console.log(count)

//(inbuilt)
let str = "1234567jhbh";
let str2 = "1234567890";
let Count = 0;
for(let i = 0;i<str.length;i++){
    if(str2.includes(str[i])){
        count++;
    }
}
console.log(count);


//(second method)
let Str = "1234567jhbh";
let str1 = "1234567890";
let Count1 = 0;
for(let i = 0;i<Str.length;i++){
    let check = Number(Str[i]);
    if(check>=0&&check<=9){
        Count1++;
    }
}
console.log(count);