
// let vowelArr = ["a","e","i","o","u"];
// function vowelsCount(str){
//     let countVowel ="";
//     let count = 0;

//     for(let i = 0; i<=vowelArr.length; i++){
//         for(let j = 0; j<= str.length; j++){
//             if(vowelArr[i] == str[i]){
//                 count = str[j];
//                 countVowel = str[j];
//             }
//         }
//     }
//     return count;
// }
// const arr = vowelsCount("sachin");
// console.log(arr);
// let vowelArr = ["a", "e", "i", "o", "u"];

// function vowelsCount(str) {
//     let count = 0;

//     for (let j = 0; j < str.length; j++) {
//         if (vowelArr.includes(str[j].toLowerCase())) {
//             count++;
//         }
//     }

//     return count;
// }

// const arr = vowelsCount("sachin");
// console.log(arr);  // Output: 2 (vowels: 'a' and 'i')
let vowelArr = ["a", "e", "i", "o", "u"];

function vowelsCount(str) {
    let count = 0;

    for (let i = 0; i < vowelArr.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (vowelArr[i] === str[j].toLowerCase()) {
                count++;
            }
        }
    }

    return count;
}

const arr = vowelsCount("SACHINRATHOD");
console.log(arr);  // Output: 2
