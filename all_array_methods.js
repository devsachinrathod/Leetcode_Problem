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

// // // filter method
// let mixedNumbers = [1, -2, 3, -4, 5, -6];

// function filterPositive(arr) {
//     return arr.filter(function(num) {
//         return num > 0 || num< 0;

//     });
// }
// let positives = filterPositive(mixedNumbers);
// console.log("Positive Numbers:", positives);

// // // reduce method

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
// function explainParseInt(value) {
//   console.log("Original Value:", value);
//   let result = parseInt(value);
//   console.log("After parseInt:", result);
// }
// explainParseInt("11sachin23.45");
// explainParseInt("42");

// explainParseInt("42px");

// explainParseInt("3.14");
// function explainParseFloat(value) {
//   console.log("Original Value:", value);
//   let result = parseFloat(value);
//   console.log("After parseFloat:", result);
// }

// explainParseFloat("3.14");

// explainParseFloat("42");


// function fetchData(url) {
//   console.log("Fetching data from URL:", url);
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       console.log("Fetched Data:", data.title);
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//     });
// }   

// fetchData("https://jsonplaceholder.typicode.com/todos/1");



// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         console.log(arr[i], arr[j]);
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         for (let k = 0; k < arr.length; k++) {
//             console.log(arr[i], arr[j], arr[k]);
//         }
//     }
// }


// for(let i =1; i<=20; i++){
//     console.log(i);
// }

// Print only even numbers between 1 and 50.

// for(let i =1; i<=50; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// Print the multiplication table of 7


// }

// for(let i =1; i<=10; i++){
//     console.log(7*i);
// }

// for(let i =10; i>=1; i--){
//     console.log(i);
// }

// sum of 10 natural numbers
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = + i;
// }
// console.log(sum);

// for( let i = 1; i <= 100; i++){
// if( i%2 == 0){
//     console.log(i);
// }
// }    

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }
//  Umesh Yadav, I hail from a small village in New Delhi. I've graduated from IIT Jammu with Bachelors in CSE. Had a really great (2 + 2i years) time there :) 
// I currently work as a Software Engineer at Microsoft (Azure Core) with 1.5+ YOE in SWE roles.
// Curious by Nature, I learnt coding with aim to solve problems and build things, still enjoy it. I love to explore new things and got a chance to work as a Treasurer, Administrator, Group Head and Policy Maker in my college to enhance my Leadership and Management skills. In my free time, I read self-help/ non-fiction books, listen to music, relax/ chill by watching web series. I also enjoy automating boring stuff :)
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((resolve)=>{
    setTimeout(() => {
        resolve("This function gets resolve")
    }, t * 1000);
  })
}

function wait2(t) {
  return new Promise((resolve)=>{
   setTimeout(() => {
     resolve("This is also get resolve");
   }, t*1000);
  })
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("this also get resolve");
        }, t*1000);
    })

}

function calculateTime(t1, t2, t3) {
  const arr=[wait1(t1),wait2(t2), wait3(t3)];
  console.log(arr);
}
calculateTime(2,4,3);
module.exports = calculateTime;
