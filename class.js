
// // class Animal {
// //   constructor(name, legCount) {
// //     this.name = name
// //     this.legCount = legCount
// //   }
// //   describe() {
// //     return `${this.name} has ${this.legCount} legs`
// //   }
// // }

// // const a2 = new Animal('sasda', "raffa");
// // console.log(a2.describe());

// function setZeroes(matrix) {
//   let rows = matrix.length - 1;
//   let cols = matrix[0].length - 1;

//   for (let i = 0; i <= rows; i++) {
//     console.log("this the element", matrix[i]);
//     if(rows[i]==[1,3,1,5]){
//       console.log("break the loop");
//       break;

//     }
//   }
//   for (let j = 0; j <= cols; j++) {

//     console.log("this is the element :", matrix[j]);
//   }

// }
// setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);

import express from "express";
const app = express();
app.use(express.json());
const port = 4001;
// function usercheck(username, password) {
//     if (username !== "sachin" || password !== "echan") {
//         return false;
//     }
//     else {
//         return true;
//     }
// }
// function kidneyCheck(kidneyId) {
//     if (kidneyId !== 1) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function userMidlleware(req , res , next){
    if(username != "sachin" || password != "echan"){
        return res.json({
            msg:"user not exist...?"
        })
    }
    else{
        next();
    }
}

app.post("/", userMidlleware, (req, res) => {
    // const kidneyIdd = req.query.kidneyId;
    const {username,password} = req.body;
    

    console.log(username,password);
    // try {
    //     if (!usercheck(req.body.username, req.body.password)) {
    //         return res.status(401).json({ message: "User doesn't exist" });
    //     }
    // } catch (err) {
    //     return res.status(402).send("invalid data", err);
    // }
    if (!kidneyCheck(Number(kidneyIdd))) {
        return res.status(403).send("Not availble kidney");
    }
});
app.get('/hello', (req, res) =>{
    const msg = req.query.msg;

    console.log(msg);
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=kidney_routes.js.map