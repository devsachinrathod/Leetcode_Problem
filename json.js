// function jsonMethods(jsonString, anotherString) {
//   console.log("Original JSON String:", jsonString);

//   // Parsing JSON string to JavaScript object
//   setTimeout(function() {
//     let parsedObject = JSON.parse(jsonString, anotherString);
//     console.log("After JSON.parse():", parsedObject);

//     // Stringifying JavaScript object to JSON string
//     let Sringfyingdata = JSON.stringify(parsedObject);
//     console.log("After JSON.stringify():", Sringfyingdata);
//   }, 3000);
// }


// // Example Usage for JSON Methods
// const sampleJSONString = '{"name": "John", "age": 30, "city": "New York"}';
// jsonMethods(sampleJSONString);


// const anotherString = function (key, value) {
//     // Exclude properties with key "age"
//     if (key === "age") {
//         return undefined;
//     }
//     return value;
// }


// let count = 0;

// function counter() {
//   count++;
//   console.log("Counter:", count);

//   // call the same function again after 1 second
//   setTimeout(counter, 1000);
// }

// // start the counter

// counter();


function printHello(num){
  for(let i=0; i<=num.length; i++){
   console.log("hello world",i);
  }
}
printHello(23);  