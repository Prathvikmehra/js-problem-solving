//  Remove All Vowels from a String
// Given a string, remove vowels (a, e, i, o, u – you can treat uppercase similarly).

// Input: "hello" → Output: "hll"
// Input: "JavaScript" → Output: "JvScrpt"
// Input: "AEIOU" → Output: "" (empty string, if case-insensitive)

let name2 = "hlloe joe";
let rev = "";
let arr = ['a','e','i','o','u','A','E','I','O','U'];
for(let i = 0; i < name2.length; i++){
    if(arr.includes(name2[i])){
        continue;
    } else {
        rev += name2[i];
    }
}
console.log(rev);

//(second method )
let name1 = "hlloe joe";
let rev1 = "";
for (let i = 0; i < name1.length; i++) {
  let code = name1.charCodeAt(i);
  if (
    code===65||code===69||code===73||code===79||code === 85 ||
    code===97||code===101||code===105||code===111||code===117
  ) {
    continue;
  } else {
    rev1 += name1[i];
  }
}
console.log(rev1);

//(third method )
// let name = "hlloe joe";
// let vowels = ['a','e','i','o','u','A','E','I','O','U'];
// for(let i = 0; i < vowels.length; i++){
//     while(name.indexOf(vowels[i]) !== -1){
//         name = name.replace(vowels[i], "");
//     }
// }
// console.log(name);


//(object method)
let str = "lets do this bro";
let reve = "";

let obj = {A:1,E:1,I:1,O:1,U:1,a:1,e:1,i:1,o:1,u:1};
for(let i=0;i<str.length;i++){
    if(obj[str[i]]==undefined){
        reve += str[i];
    }
}
console.log(reve)