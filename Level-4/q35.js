// To Uppercase
// Convert a string to uppercase.

// Input: "hello" → Output: "HELLO"
// Input: "Js" → Output: "JS"
// Input: "123abc" → Output: "123ABC"

function func(value) {
    let str = value;
    let res = "";
    for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);
        if(code >= 97 && code <= 122){ 
            res = res + String.fromCharCode(code - 32); 
        } else {
            res = res + str[i];
        }
    }
    console.log(res);
}
func("1234abf");