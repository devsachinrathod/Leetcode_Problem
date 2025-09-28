// let arr1 = [4, 5, 3, 4, 5, 7,];
// let arr2 = [4, 5, 3, 4, 5, 7];

// let arr3 = arr1 + arr2;
// console.log(arr3);


// // console.log(arr.length);

// // function usingWhileLoop(array) {
// //     const n = array.length;
// //     let i = 0;
// //     while (i< n) {
// //         console.log(i ,"=",array[i]);
// //         i+=3;
// //     }
// // }
// // usingWhileLoop(arr);


function fS(n) {
    let first = 0;
    let second = 1;

    for (let i = 2; i < n; i++) {
        let c = first + second;
        console.log(c);
        first = second;
        second = c;
    }
}
fS(7);