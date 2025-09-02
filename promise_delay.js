
// // // // function wait(){
// // // //   return  new Promise ((resolve)=>{
// // // //     setInterval(()=>{
// // // // resolve("this resolved");
// // // //     },1000)
    
// // // //   })

// // // // }
// // // // let rsukt = wait();
// // // // function printHello() {
// // // //   return new Promise((resolve) => {
// // // //     setTimeout(() => {
// // // //       console.log("f1");
// // // //       resolve(); // signal that f1 is done
// // // //     }, 2000);
// // // //   });
// // // // }

// // // // async function main() {
// // // //   await printHello();   // wait until f1 is done
// // // //   console.log("f2");    // then run f2
// // // // }

// // // // main();

// // // function printUsingLoop(){
// // //   return new Promise((resolve)=>{
// // //     setTimeout(()=>{
// // //       resolve("Fetch data");
// // //     },2000)
// // //   })
// // // }
// // // // console.log("start");
// // // // printUsingLoop().then((result)=>{
// // // //   console.log("all done", result);
// // // // })
 
// // // async function f1(result){
// // //   await printUsingLoop().then((rea)=>{
// // // console.log("data is fetched", rea);
// // //   });
  
// // // }

// // // f1();

// // // Each function returns a promise that resolves after given seconds
// // function wait1(t) {
// //   return new Promise((resolve) =>{
// //   setTimeout(()=>{
// //     console.log("Wait1 Resolve");
// //     resolve("resolve");
// //   },t*1000);
// //   });
// // }

// // function wait2(t) {
// //   return new Promise((resolve) =>{
// //   setTimeout(()=>{
// //     console.log("Wait2 Resolve");
// //     resolve("resolve");
// //   },t*1000);
// //   });
// // }
// // function wait3(t) {
// //   return new Promise((resolve) =>{
// //   setTimeout(()=>{
// //     console.log("Wait3 Resolve");
// //     resolve("resolve");
// //   },t*1000);
// //   });
// // }

// // // Sequentially call wait1, wait2, wait3 and return total time in ms
// // function calculateTime(t1, t2, t3) {
// //   const start = Date.now(); // start time in milliseconds

// //   return wait1(t1)
// //     .then(() => wait2(t2))
// //     .then(() => wait3(t3))
// //     .then(() => Date.now() - start); // total time in ms
// // }


// // function exPOrts(){
// //   console.log("promise-all function");


// // }
// // function callFuncall(callback){
// //   setTimeout(()=>{
// //     console.log("callback function call");
// //     callback();
// //   }, 5000)
// // }
// // callFuncall(()=>{
// //   console.log("This called Fuction");
// // })

// // async function timeChecker(){
// //  const current = Date.now();

// // calculateTime(2,3,3);
// // const ne = Date.now();
// // const asn = current- ne;
// // console.log(asn);
// // }

// // timeChecker();
// // module.exports = {exPOrts, calculateTime,callFuncall};
// // let i =0;
// // do{
// //   console.log("Hello world")
// //   i++;
// // }
// // while( i>10);

// let i =0;
// while(i<=10){
//   while(i<=100){
//     console.log(i);
//     // i++;
//   }
//   console.log(i);
//   i++;
// }

let arr = [ 2,3,4,3,3433,43];

function f1(element){
  arr.forEach(val in arr)
    console.log(val);
}
//   }
//   console.log("old array:", arr);
//   arr.push(element);
//   console.log("new array:", arr);
// // arr.filter((val)=>{
// //   if(val == 3){
// //     console.log("Thia " ,val);
// //   }
// // })
// }
f1();