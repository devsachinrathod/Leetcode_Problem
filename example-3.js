<<<<<<< HEAD
function Example_3(){
    return 10;
};

function f2(n){
    console.log("The value is return by function 1", n);
}

f2(Example_3());
=======
function Example_3() {
    let arr = [
        "sachin","rahul","Himanshu","hiteesh",
        "mohit","bhagi","nisha","rupali","komal","ritesh"
    ];

    let qualityArr = [
        { name: "Honesty",      description: "Always tells the truth and admits mistakes.", score: 9 },
        { name: "Teamwork",     description: "Works well with others and helps the group succeed.", score: 8 },
        { name: "Creativity",   description: "Thinks of new and original ideas.", score: 7 },
        { name: "Leadership",   description: "Can guide and motivate others effectively.", score: 9 },
        { name: "Discipline",   description: "Stays focused and completes tasks on time.", score: 10 },
        { name: "Empathy",      description: "Understands and cares about others' feelings.", score: 8 },
        { name: "Adaptability", description: "Can adjust easily to new situations.", score: 7 }
    ];
 let count = 0;
    for(let j = 0; j<qualityArr.length; j++){
        console.log(count++);
        for(let k =0; k<qualityArr.length; k++){
            console.log(qualityArr[k].name);
        }
    }

    // Pick random name and random quality
    let randomName = arr[Math.floor(Math.random() * arr.length)];
    let randomQuality = qualityArr[Math.floor(Math.random() * qualityArr.length)];

    console.log("The Random Name:", randomName);
    console.log("His/Her quality is:", randomQuality.name, "-", randomQuality.description);

    // ✅ Meaningful condition using quality score
    if (randomQuality.score >= 9) {
        console.log(`${randomName} is Excellent in ${randomQuality.name}`);
        return 10;
    } else if (randomQuality.score >= 8) {
        console.log(`${randomName} is Good in ${randomQuality.name}`);
        return 7;
    } else {
        console.log(`${randomName} is Improving in ${randomQuality.name}`);
         console.log(`${randomName} is Improving in ${randomQuality.name}`);
        return 5;
    }
}
function printValues(num) {
    let i = 1; 
    while (i <= num) {
        console.log(`This is the value: ${i}`);
        i++;
    }
}

printValues(Example_3());
>>>>>>> development
