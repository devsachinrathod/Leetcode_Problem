// 01-all-recurion-programs.js

// // Find the facotorial of numbers

// function fact(n){
//     if(n==1){
//        return n;
//     }
//     else{
//         return n*fact(n-1);
//     }
// }
// console.log(fact(5));

// function printNu( num){
//   if (num == 0){
//     console.log(num);
//   }
//   else{
//      printNu(num - 1);
//   }
// }
// console.log(printNu(10));
// function printNu(num) {
//   if (num === 0) {
//     return; // base case, stop recursion
//   }
//   printNu(num - 1);   // recursive call first
//   console.log(num);   // print after recursion
// }

// printNu(10);

// function addOftwoNumRecurrion(n){
//     if(n ===0){
//         return 0;
//     }
//     else{
//      return n + addOftwoNumRecurrion(n-1);
//     }
// }
// console.log(addOftwoNumRecurrion(10));
function addOftwoNumRecurrion(n){
    if(n===0){
        return 0;
    }
    else{
    addOftwoNumRecurrion(n-1);
     console.log("\t", n);
    //  addOftwoNumRecurrion(n-1);
    }
}
addOftwoNumRecurrion(10);
