//Reversing the string;

function reverseString(str) {
    const n = str.length;
    console.log(n);
    let reverse = "";
    
    for (let i = n - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

let str1 = "sachin";
console.log(reverseString(str1));  // Output: "nihcas"
