let obj = {
    student1:{
    name: "sachin rathod",
    class: "tyBCA",
    college: "SRTMU"
    },
      student3:{
    name: "alex rathod",
    class: "tyBCA",
    college: "SRTMU"
    } ,
      student2:{
    name: "mechan rathod",
    class: "tyBCA",
    college: "SRTMU"
    } 
}

function mapObj(){
 for(let key in obj)
    // console.log(obj.student2.name);
console.log(obj[key]);
}
mapObj();