// Compare Two Strings (Exact Match)
// Given two strings, check if they are exactly equal (case-sensitive).

// Input: "hello", "hello" → Output: true
// Input: "Hello", "hello" → Output: false
// Input: "js", "js " → Output: false

function compareStrings(str1, str2) {
  return str1 === str2;
}
console.log(compareStrings("hello", "hello"));
console.log(compareStrings("Hello", "hello"));
console.log(compareStrings("js", "js "));

