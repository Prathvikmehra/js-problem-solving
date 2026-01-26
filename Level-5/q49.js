// Remove All Digits from a String
// Given a string, remove all digits.

// Input: "abc123" → Output: "abc"
// Input: "Js 101 course" → Output: "Js  course"
// Input: "2025" → Output: ""


let namee = "str  133  kr3f ";
let rev = "";
for(let i = 0;i<namee.length;i++){
    if(namee[i]>="0"&&namee[i]<="9"){       //if you put numbers and not the string in numbers it will not save spaces
        continue;
    }else{
        rev+=namee[i];
    }
}
console.log(rev);

//(using object)
let str = "Js 101 course";
let res = "";
let obj = {"0":1,"1":1,
"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1}

for(let i=0;i<str.length;i++){
    if(obj[str[i]]==undefined){
        res+=str[i];
    }
}

console.log(res)