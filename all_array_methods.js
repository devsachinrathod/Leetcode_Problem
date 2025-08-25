// // all_array_methods.js


// function pushElement(arr, element) {
//   console.log("Original Array:", arr);
//   arr.push(element);
//   console.log("After push:", arr);
//   console.log("New Length:", arr.length);
//   console.log("Last Element:", arr[arr.length -2]);
// }
// pushElement([1, 2, 3], 4);
// pushElement(["a", "b"], "c");   
// pushElement([2], 1);

// // pop method
// function popElement(arr) {
//   console.log("Original Array:", arr);
//   let poppedElement = arr.pop();
//   console.log("After pop:", arr);
//   console.log("Popped Element:", poppedElement);
//   console.log("New Length:", arr.length);
// }
// popElement([1, 2, 3]);
// popElement(["a", "b", "c"]);

// // shift method
// function shiftElement(arr) {
//     console.log("Original Array:", arr);
//     let shiftedElement = arr.shift();
//     console.log("After shift:", arr);
//     console.log("Shifted Element:", shiftedElement);
//     console.log("New Length:", arr.length);
// }
// shiftElement([1, 2, 3]);
// // 
// // unshift method

// function unshiftElement(arr, element) {
//     console.log("Original Array:", arr);
//     arr.unshift(element);
//     console.log("After unshift:", arr);
//     console.log("New Length:", arr.length);
//     console.log("First Element:", arr[0]);
// }
// unshiftElement([1, 2, 3], 0);


// Array.prototype.forEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }
// let arr = [1, 2, 3];
// arr.forEach(function(element, index, array) {
//     console.log("Element:", element, "Index:", index, "Array:", array);
// });

// // map method
// let numbers = [1, 2, 3, 4, 5];

// setInterval(() => {
//     let squares = numbers.map(function(num) {
//         return num * num;
//     });
//     console.log("Original Array:", numbers);
//     console.log("After map (squares):", squares);
// },2000);

// // filter method
// let mixedNumbers = [1, -2, 3, -4, 5, -6];

// function filterPositive(arr) {
//     return arr.filter(function(num) {
//         return num > 0;
//     });
// }
// let positives = filterPositive(mixedNumbers);
// console.log("Positive Numbers:", positives);

// // reduce method

// let nums = [1, 2, 3, 4, 5];

// function sumArray(arr) {
//     return arr.reduce(function(accumulator, current) {
//         return accumulator + current;
//     },0);
// }
// const sum = sumArray(nums);
// console.log("Sum of Array Elements:", sum);

// // what is reduce 
// // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Example Usage for parseInt
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}
explainParseInt("11sachin23.45");
explainParseInt("42");