// function counter(){
// const date = new Date();
// console.log(date.getTime());
// }
// counter();

let num = 0;

function countER(){
setTimeout(()=>{
   return num++;
},1000);

}

console.log(countER());