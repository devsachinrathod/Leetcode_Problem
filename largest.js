function findLargestAndSmallest(arr) {
    let largest = arr[0];//45
 console.log(10>10);//false
 console.log(5>10);//false
  console.log(20>10);//true
    console.log(3>20);//false
        console.log(45>20);//true
  

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) { //ture
            largest = arr[i];
        }
    }
    return { largest};
}

// Example usage:
let array = [10, 5, 20, 3, 45];
let result = findLargestAndSmallest(array);
console.log("Largest:", result.largest);   // Output: 45

