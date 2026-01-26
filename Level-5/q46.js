// Count Uppercase Letters
// Given a string, count uppercase letters.

// Input: "HeLLo" → Output: 3 (H, L, L)
// Input: "javascript" → Output: 0
// Input: "JS 101" → Output: 2 (J, S)

let Name1="HelLo";
let rev = Name1.split("");
let count = 0;
let store = [];
for(let i = 0;i<rev.length;i++){
    if(rev[i]>='A'&&rev[i]<='Z'){
        count++;
        store.push(rev[i]);
    }
}
console.log(count,(store));


//(manually)
let name1 = "heLLo";
let Count = 0;
for(let i = 0;i<name1.length;i++){
    let check = name1[i].toUpperCase()
    if(check== name1[i]){
        Count++;
    }
}
console.log(Count);