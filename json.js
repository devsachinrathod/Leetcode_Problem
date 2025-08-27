function jsonMethods(jsonString, anotherString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  setTimeout(function() {
    let parsedObject = JSON.parse(jsonString, anotherString);
    console.log("After JSON.parse():", parsedObject);

    // Stringifying JavaScript object to JSON string
    let Sringfyingdata = JSON.stringify(parsedObject);
    console.log("After JSON.stringify():", Sringfyingdata);
  }, 3000);
}


// Example Usage for JSON Methods
const sampleJSONString = '{"name": "John", "age": 30, "city": "New York"}';
jsonMethods(sampleJSONString);


const anotherString = function (key, value) {
    // Exclude properties with key "age"
    if (key === "age") {
        return undefined;
    }
    return value;
}

