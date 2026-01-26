// Replace All 'a' with 'e'
// Given a string, replace all 'a' with 'e'.

// Input: "banana" → Output: "benene"
// Input: "apple" → Output: "epple"
// Input: "cat" → Output: "cet"


let name = "banana";
let result = name.replaceAll("a", "e");
console.log(result);


//(manually)
let Name = "banana";
let newStr = "";
for (let i = 0; i < Name.length; i++) {
  if (Name[i] === "a") {
    newStr += "e";
  } else {
    newStr += Name[i];
  }
}
console.log(newStr);


//(third method)
let name1 = "banana";
let arr = name1.split("");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "a") {
    arr[i] = "e";
  }
}
let Result = arr.join("");
console.log(Result);