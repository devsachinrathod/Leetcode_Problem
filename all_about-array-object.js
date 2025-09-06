// function counter(){
// const date = new Date();
// console.log(date.getTime());
// }
// counter();
let studentObj = {
   student1: {
      name: "Tanuj",
      surname: "rathod",
      class: "4th",
      schoolName: "Lotus high school"
   },
   student2: {
      name: "pavan",
      surname: "Jadhav",
      class: "3rd",
      schoolName: "Ram-bhau koslange school"
   },
   studentc3: {
      name: "Sanchika",
      surname: "Jadhav",
      class: "KG-2",
      schoolName: "Ram-bhau koslange school"
   },
   studentc4: {
      name: "Savan",
      surname: "Jadhav",
      class: "1st",
      schoolName: "Ram-bhau koslange school"
   },
   studentc5: {
      name: "Riya",
      surname: "Jadhav",
      class: "1st",
      schoolName: "Ram-bhau koslange school"
   }
};

// Iterate over each \
function mapObject(obj) {
   for (let key in obj) {
      if (obj[key].schoolName == "Ram-bhau koslange school") {
         console.log(` ${obj[key].schoolName}`);
      }

   }
}

mapObject(studentObj);


let studArray = [
   { name: "name" ,
      sirname:"surname"
   },
   { name: "suname" },
   { name: "middlename" }
];

const printfun = (obj) => {
  
   obj.map((key) => {
      if(key.sirname !== undefined){
              console.log(key.sirname);
         // console.log("not exist key value");
      }
 
   });
};

printfun(studArray);

let num = 0;

function countER(){
   setInterval(()=>{
      console.log(num++);
   },100)
}
countER();

// console.log(countER());