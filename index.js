// // // Import file system module
// // const fs = require("fs");

// // // Asynchronous file read
// // fs.readFile("sample.txt", "utf8", (err, data) => {
// //   if (err) {
// //     console.error("Error reading file:", err);
// //     return;
// //   }
// //   console.log("File contents:\n", data);
// // });

// // // Expensive synchronous operation
// // let sum = 0;
// // for (let i = 0; i < 1e9; i++) {  // Try 1e7, 1e8, 1e9
// //   sum += i;
// // }
// // console.log("Expensive operation finished. Sum =", sum);
// /*
//     Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
// */

// function wait(n){
//   return  new Promise ((resolve)=>{
//     setInterval(()=>{
// resolve("this resolved");
//     },n*1000)
    
//   })

// }
// let rsukt = wait(2).then((result) => {
//   console.log(result);
// });
// console.log(rsukt);

// Recursion example: Factorial
// factorial(n) = n * (n-1) * (n-2) ... * 1

function bestDivision(index, b, c, arr, n) {
    if (index === n) {
        // Base case: all elements processed
        let sum_b = 0, sum_c = 0;

        for (let x of b) sum_b += x;
        for (let x of c) sum_c += x;

        return Math.abs(sum_b * sum_b - sum_c * sum_c);
    }

    // Case 1: put element in b
    let new_b = [...b];
    new_b.push(arr[index]);
    let res1 = bestDivision(index + 1, new_b, c, arr, n);

    // Case 2: put element in c
    let new_c = [...c];
    new_c.push(arr[index]);
    let res2 = bestDivision(index + 1, b, new_c, arr, n);

    return Math.min(res1, res2);
}

// Example usage
let arr = [1, 2, 3, 4];
let n = arr.length;

let result = bestDivision(0, [], [], arr, n);
console.log("Minimum difference:", result);
