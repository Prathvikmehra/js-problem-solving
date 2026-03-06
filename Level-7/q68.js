// Check if Array is Sorted (Increasing)
// Return true if each element is >= previous one.

// Input: [1, 2, 3, 4] → Output: true
// Input: [1, 2, 2, 3] → Output: true
// Input: [3, 2, 1] → Output: false



let arr = [1,2,3,4,7,6];
for(let i=0;i<arr.length;i++){
    if(i==0){
        continue;
    }else if(arr[i]>=arr[i-1]){
        continue;
    }else{
        console.log("false")
        return;
    }
}
console.log("true")
