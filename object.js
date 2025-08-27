// // Object Methods Explanation
// function objectMethods(obj) {
//   console.log("Original Object:", obj);

//   let keys = Object.keys(obj);
//   console.log("After Object.keys():", keys);

//   let values = Object.values(obj);
//   console.log("After Object.values():", values);

//   let entries = Object.entries(obj);
//   console.log("After Object.entries():", entries);

//   let hasProp = obj.hasOwnProperty("key2");
//   console.log("After hasOwnProperty():", hasProp);

//   let newObj = Object.assign({}, obj); // Creates a shallow copy of obj
//   console.log("After Object.assign():", newObj);


// }

// // Example Usage for Object Methods
// const sampleObject = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };

// objectMethods(sampleObject);


function mathMethods(value) {
  console.log("Original Value:", value);

  let rounded = Math.round(value);
  console.log("After round():", rounded);

  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  let randomValue = Math.random();
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
// mathMethods(9);
// mathMethods(25);


