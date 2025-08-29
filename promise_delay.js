
// function wait(){
//   return  new Promise ((resolve)=>{
//     setInterval(()=>{
// resolve("this resolved");
//     },1000)
    
//   })

// }
// let rsukt = wait();

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printHello() {
  while (true) {
    console.log("hello world");
    await wait(5000); // waits 5 seconds
  }
}

printHello().then(()=>{
console.log("second");

});
