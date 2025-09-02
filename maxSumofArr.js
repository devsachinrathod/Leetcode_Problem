function maxSubArray(nums) {
    let maxSum = nums[0];      // Maximum sum so far
    let currentSum = nums[0];  // Maximum sum ending at current index

    for (let i = 1; i < nums.length; i++) {
        // Decide to extend the current subarray or start a new one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum); // Update overall max
    }

    return maxSum;
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6
