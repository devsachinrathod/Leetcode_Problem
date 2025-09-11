var moveZeroes = function(nums) {
    let nonZeros = [];
    let zeros = [];

    // Separate non-zero and zero elements
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros.push(0);
        } else {
            nonZeros.push(nums[i]);
        }
    }

    // Combine them
    let fullArr = [...nonZeros, ...zeros];
    console.log("thisss",fullArr)
    // Modify the original array in-place
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i] = fullArr[i]);
    }
};


let nums =  [0,1,0,3,12];
console.log(moveZeroes(nums));