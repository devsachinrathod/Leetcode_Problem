function findLargestAndSmallest(arr) {
    let largest = arr[0];//45
    let smallest = arr[0];

    // console.log(10 > 10);//false
    // console.log(5 > 10);//false
    // console.log(20 > 10);//true
    // console.log(3 > 20);//false
    // console.log(45 > 20);//true

    let i =0;
    while(i < arr.length){
        if(arr[i] > largest){
            largest = arr[i];
        }
        i++;
    }
    let j=0;
    // console.log(10<10);
    // console.log(5<10);
    while(j<arr.length){
        if(arr[j] < smallest){
            smallest = arr[j];
        }
        j++;
    }
    return {largest, smallest};
}

function pri(n){
    if(n>10){
    return true;
    }else{
        return false;
    }
 
}
console.log(pri(12));
console.log(pri(1));

// Example usage:
let array = [10, 5, 20, 3, 45,-1,1.2,2];
let result = findLargestAndSmallest(array);
console.log("Largest:", result.largest); 
console.log("smallest:",result.smallest);  // Output: 45

