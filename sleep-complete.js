function sleep(milliseconds) {
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve("There is the thread be busy do other stack");
        console.log('fuction1 called');
    }, milliseconds *1000);
    })
  
}

sleep(2).then((result)=>{
    console.log('ans', result);
    console.log('second fuction called');
})

let promise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("✅ Task done!");
    } else {
      reject("❌ Task failed!");
    }
  }, 2000); // simulate async work
});

promise
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.error("Rejected:", error);
  });
