function findMaxAverage(nums, k) {
    let windowSum = 0;
    
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    
    let maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum / k;
}
nums = [1,12,-5,-6,50,3], k = 4
console.log(findMaxAverage(nums,k));