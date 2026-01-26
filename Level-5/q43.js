// Check if String Contains a Character
// Given a string and a character, check if the character appears in the string.

// Input: str = "hello", ch = "e" → Output: true
// Input: str = "hello", ch = "a" → Output: false
// Input: str = "JavaScript", ch = "S" (case-sensitive) → Output: false


function present(string,char){
    if(string.includes(char)){
        console.log("true")
    }else{
        console.log("false")
    }
}
present("hello","k")

//(manually)
function present(string, char) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            console.log("true");
            return;
        }
    }
    console.log("false")
}

present("hello", "k")
