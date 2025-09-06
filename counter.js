// function counter(){
// const date = new Date();
// console.log(date.getTime());
// }
// counter();

// let studentObj = {
//    student1: {
//       name: "Tanuj",
//       surname: "rathod",
//       class: "4th",
//       schoolName: "Lotus high school"
//    },
//    student2: {
//       name: "pavan",
//       surname: "Jadhav",
//       class: "3rd",
//       schoolName: "Ram-bhau koslange school"
//    },
//    studentc3: {
//       name: "Sanchika",
//       surname: "Jadhav",
//       class: "KG-2",
//       schoolName: "Ram-bhau koslange school"
//    },
//    studentc4: {
//       name: "Savan",
//       surname: "Jadhav",
//       class: "1st",
//       schoolName: "Ram-bhau koslange school"
//    },
//    studentc5: {
//       name: "Riya",
//       surname: "Jadhav",
//       class: "1st",
//       schoolName: "Ram-bhau koslange school"
//    }
// };

let studArray = ["name" , "suname", "middlename"];
// console.log(studentObj.student1.name);

const printfun = (obj) => {
  obj.map((key) => {
    console.log(key.name);
  });
}
console.log(printfun(studArray))
// let num = 0;

// function countER(){
// setTimeout(()=>
//    return num++;
// },1000);

// }

// console.log(countER());