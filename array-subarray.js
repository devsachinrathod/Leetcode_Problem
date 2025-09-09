
let mainArr = ["sachin", "kalpesh","dipak","sahil","ahetesham"];
 
function printElement(arr){
    let n = mainArr.length;
    for(let i=0; i<=n; i++){
      for(let j=0; j<=i; j++){
        console.log(arr[i], "and",arr[j]);
      }
    };
} 

printElement(mainArr);