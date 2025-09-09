let arr = [4, 5, 3, 4, 5, 7];
console.log(arr.length);

function usingWhileLoop(array) {
    const n = array.length;
    let i = 0;
    while (i< n) {
        console.log(i ,"=",array[i]);
        i+=3;
    }
}
usingWhileLoop(arr);