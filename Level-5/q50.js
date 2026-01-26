// Toggle Case of Each Character
// Change lowercase to uppercase and uppercase to lowercase.

// Input: "HeLLo" → Output: "hEllO"
// Input: "abcDEF" → Output: "ABCdef"
// Input: "Js 101" → Output: "jS 101" (digits and spaces unchanged)


let str = JeLLo;
let rev = "";
for(let i = 0;i<str.length;i++){
    let ascii = str[i].charCodeAt;
    if(ascii>=65 && ascii<=90){
        ascii = ascii+32;
    }else if(ascii>=97&&ascii<=122){
        ascii = ascii-32;
    }
    rev = rev + String.fromCharCode(ascii);
}
console.log(rev)


//(inbuilt)
 let Str = "JeLLo";
 let Rev = '';
 for(let i = 0;i<Str.length;i++){
    if(Str[i]<='A'&&Str[i]>='Z'){
Rev = Rev+Str[i].toLowerCase();
}else{
        Rev = Rev+Str[i].toUpperCase();

    }
 }
 console.log(Rev)


 //(third method)
//  let name = "jeLLo";
// let rev ="";
// let upper = name.toUpperCase()
// for(let i= 0;i<name.length;i++){
//     if(name[i]===upper){
//         rev+=name[i].toLowerCase()
//     }else{
//         rev+=name[i].toUpperCase()
//     }
// }
// console.log(rev)