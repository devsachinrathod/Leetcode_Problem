
// function wait(){
//   return  new Promise ((resolve)=>{
//     setInterval(()=>{
// resolve("this resolved");
//     },1000)
    
//   })

// }
// let rsukt = wait();
function printHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("f1");
      resolve(); // signal that f1 is done
    }, 2000);
  });
}

async function main() {
  await printHello();   // wait until f1 is done
  console.log("f2");    // then run f2
}

main();
