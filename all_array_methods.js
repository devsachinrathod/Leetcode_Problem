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

// shift method
function shiftElement(arr) {
    console.log("Original Array:", arr);
    let shiftedElement = arr.shift();
    console.log("After shift:", arr);
    console.log("Shifted Element:", shiftedElement);
    console.log("New Length:", arr.length);
}
shiftElement([1, 2, 3]);
// 
// unshift method

function unshiftElement(arr, element) {
    console.log("Original Array:", arr);
    arr.unshift(element);
    console.log("After unshift:", arr);
    console.log("New Length:", arr.length);
    console.log("First Element:", arr[0]);
}
unshiftElement([1, 2, 3], 0);