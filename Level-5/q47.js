// Count Lowercase Letters
// Given a string, count lowercase letters.

// Input: "HeLLo" → Output: 2 (e, o)
// Input: "JAVASCRIPT" → Output: 0
// Input: "Js 101" → Output: 1 (s)


let name1="HelLo";
let rev = name1.split("");
let count = 0;
let store = [];
for(let i = 0;i<rev.length;i++){
    if(rev[i]>='a'&&rev[i]<='z'){
        count++;
        store.push(rev[i]);
    }
}
console.log(count,(store));


//(second method )
let Name1 = "heLLo";
let Count = 0;
for(let i = 0;i<Name1.length;i++){
    let check = Name1[i].toLowerCase()
    if(check== Name1[i]){
        Count++;
    }
}

console.log(Count);

