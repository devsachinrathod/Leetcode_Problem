/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Create dp array filled with 1s
    let dp = Array(m).fill().map(() => Array(n).fill(1));

    // Fill dp table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    console.log( dp[m-1][n-1]);
};
console.log(uniquePaths(2,3));