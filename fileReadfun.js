import fs from "fs";

function writeFileFunction() {
    const content = "This file was created using fs.writeFile.";

    fs.writeFile("employe.txt", content, "utf-8", (err) => {
        if (err) {
            console.log("❌ Error creating the file:", err.message);
            return;
        }
    //  if(employe.txt){
    //    console.log("✅ File created and written successfully!");
    //  }
       
    });
}

writeFileFunction();

async function readFileFunction(){
   await fs.readFile("employe.txt","utf-8",(err, data)=>{
        if(err){
            console.log("Error creating the file:",err.message);
            return;
        }
        console.log("The Data : ", data);
    })
   await writeDataFunction2("sachin is not present");
}

readFileFunction();

function writeDataFunction2(data) {

    fs.appendFile("employe.txt", data, "utf-8", (err) => {
        if (err) {
            console.log("❌ Error creating the file:", err.message);
            return;
        }

        console.log("✅ File created and written successfully!");
    });
}


