// // Import file system module
// const fs = require("fs");

// // Asynchronous file read
// fs.readFile("sample.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File contents:\n", data);
// });

// // Expensive synchronous operation
// let sum = 0;
// for (let i = 0; i < 1e9; i++) {  // Try 1e7, 1e8, 1e9
//   sum += i;
// }
// console.log("Expensive operation finished. Sum =", sum);
/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n){
  return  new Promise ((resolve)=>{
    setInterval(()=>{
resolve("this resolved");
    },n*1000)
    
  })

}
let rsukt = wait(2).then((result) => {
  console.log(result);
});
console.log(rsukt);