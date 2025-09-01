
// // function wait(){
// //   return  new Promise ((resolve)=>{
// //     setInterval(()=>{
// // resolve("this resolved");
// //     },1000)
    
// //   })

// // }
// // let rsukt = wait();
// // function printHello() {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       console.log("f1");
// //       resolve(); // signal that f1 is done
// //     }, 2000);
// //   });
// // }

// // async function main() {
// //   await printHello();   // wait until f1 is done
// //   console.log("f2");    // then run f2
// // }

// // main();

// function printUsingLoop(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("Fetch data");
//     },2000)
//   })
// }
// // console.log("start");
// // printUsingLoop().then((result)=>{
// //   console.log("all done", result);
// // })
 
// async function f1(result){
//   await printUsingLoop().then((rea)=>{
// console.log("data is fetched", rea);
//   });
  
// }

// f1();

// Each function returns a promise that resolves after given seconds
function wait1(t) {
  return new Promise((resolve) =>{
  setTimeout(()=>{
    console.log("Wait1 Resolve");
    resolve("resolve");
  },t*1000);
  });
}

function wait2(t) {
  return new Promise((resolve) =>{
  setTimeout(()=>{
    console.log("Wait2 Resolve");
    resolve("resolve");
  },t*1000);
  });
}
function wait3(t) {
  return new Promise((resolve) =>{
  setTimeout(()=>{
    console.log("Wait3 Resolve");
    resolve("resolve");
  },t*1000);
  });
}

// Sequentially call wait1, wait2, wait3 and return total time in ms
function calculateTime(t1, t2, t3) {
  const start = Date.now(); // start time in milliseconds

  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => Date.now() - start); // total time in ms
}


function exPOrts(){
  console.log("promise-all function");


}
function callFuncall(callback){
  setTimeout(()=>{
    console.log("callback function call");
    callback();
  }, 5000)
}
callFuncall(()=>{
  console.log("This called Fuction");
})
module.exports = {exPOrts, calculateTime,callFuncall};