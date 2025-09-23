// for(let i = 0; i<=100; i++){
//     if(i == 50){
//         continue;
//     }
//     console.log(i);
// }

// function printBackTrack(num) {
//     // let len = num.length;
//     if (num == 20) {
//         return 0;
//     }
//     console.log(num);
//     printBackTrack(num - 1);
// }
// printBackTrack(100);

// function realBackTracking(foots){
//     // let n = foots.length;
//     let calculateHighestStep = [0];
//     if(calculateHighestStep < foots){
//         console.log(calculateHighestStep);
//         calculateHighestStep.push(foots);
//         return calculateHighestStep;
//     }
//     realBackTracking(foots -1);
// }

// let step = [ 21 ,2,4,6,8,67];
// console.log(realBackTracking(step));


function realBackTracking(foots, index = 0, calculateHighestStep = []) {
    // base case: when we reach the end
    if (index === foots.length) {
        return calculateHighestStep;
    }

    // check and push
    if (foots[index] > calculateHighestStep[0] || calculateHighestStep.length === 0) {
        calculateHighestStep[0] = foots[index];
    }

    // recursive call
    return realBackTracking(foots, index + 1, calculateHighestStep);
}
let step = [21, 2, 4, 6, 8, 67];
console.log("Highest Step:", realBackTracking(step)[0]);
