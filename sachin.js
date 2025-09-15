

// // let ans = "This is string";//string
// // let ans2 = 10;//integer
// // let ans3 = true;//boolean
// // const obj = { name:"sachin",surname:"rathod"};//object
// // let exam;//underdefine
// // let arr= [];//array

// // // let v1 = 5;
// // // let v2 = "5";

// // // console.log(v1 !== v2);


// // console.log("camparison : ",v1 == v2);
// // console.log("camparison : ",v1 === v2);


// // console.log("Arrar : ",arr);
// // console.log(exam);
// // console.log(ans2);
// // console.log(ans3);
// // console.log(obj);
// // console.log(ans);

// // let n1 = 10;
// // let n2 = 15;

// // let n3 = 30;
// // let n4 = 30;


// // console.log(n3 == n4);

// let a = 2;
// console.log(a);
// a++;
// console.log(a);

// for(let i = 0;i<= 10; i++){
//     console.log(i);
// }

function calculateElectricity(bill) {
  let highestBillMonth = bill[0];
  let lowestBillmonth = bill[0];
  let n = bill.length;

  for (let j = 0; j < n; j++) {
    if (bill[j] < lowestBillmonth) {
      lowestBillmonth = bill[j];
    }
  }

  for (let i = 0; i < n; i++) {
    if (bill[i] > highestBillMonth) {
      highestBillMonth = bill[i];
    }
  }

  return { highestBillMonth, lowestBillmonth };
}

const arr = [120, 145.4, 1500, 3000, 1800, 5000];
console.log(calculateElectricity(arr));
