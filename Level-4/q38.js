// Palindrome String
// Check if a string is a palindrome.

// Input: "madam" → Output: true
// Input: "racecar" → Output: true
// Input: "hello" → Output: false

function isPalindrome(str){
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("madam"));


//(inbuilt)
let str = "racecar";
let reversed = str.split("").reverse().join("");
console.log(str === reversed);