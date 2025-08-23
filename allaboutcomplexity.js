function exploringBigO(n) {
    // O(1) - Constant Time
    console.log("This operation takes constant time.");

    // O(log n) - Logarithmic Time
    for (let i = 1; i < n; i *= 2) {
        console.log("This operation takes logarithmic time.");
    }

    // O(n) - Linear Time
    for (let i = 0; i < n; i++) {
        console.log("This operation takes linear time.");
    }

    // O(n log n) - Linearithmic Time
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            console.log("This operation takes linearithmic time.");
        }
    }

    // O(n^2) - Quadratic Time
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log("This operation takes quadratic time.");
        }
    }

    // O(2^n) - Exponential Time
    function exponentialTime(k) {
        if (k <= 1) return;
        console.log("This operation takes exponential time.");
        exponentialTime(k - 1);
        exponentialTime(k - 1);
    }
    exponentialTime(Math.min(n, 10)); // Limit to avoid excessive calls

    // O(n!) - Factorial Time
    function factorialTime(arr, l, r) {
        if (l === r) {
            console.log("This operation takes factorial time.");
        } else {
            for (let i = l; i <= r; i++) {
                [arr[l], arr[i]] = [arr[i], arr[l]];
                factorialTime(arr, l + 1, r);
                [arr[l], arr[i]] = [arr[i], arr[l]];
            }
        }
    }
    const arr = Array.from({ length: Math.min(n, 5) }, (_, i) => i + 1); // Limit size to avoid excessive calls
    factorialTime(arr, 0, arr.length - 1);
}

exploringBigO(5);