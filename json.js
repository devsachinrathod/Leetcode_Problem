function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

// //   Stringifying JavaScript object to JSON string
//   let jsonStringified = JSON.stringify(parsedObject);
//   console.log("After JSON.stringify():", jsonStringified);

let Sringfyingdata = JSON.stringify(parsedObject);
console.log("After JSON.stringify():", Sringfyingdata);
}


// Example Usage for JSON Methods
const sampleJSONString =
  '{"name": "John", "age": 30, "city": "New York"}';

jsonMethods(sampleJSONString);
