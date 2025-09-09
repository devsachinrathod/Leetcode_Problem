function recursiveSort(arr, index = 0) {
    // Base case: If index reaches array length, return
    if (index >= arr.length - 1) return;

    // Find the minimum element in the remaining array
    let minIndex = index;
    for (let i = index + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    // Swap current index with minIndex
    let temp = arr[index];
    arr[index] = arr[minIndex];
    arr[minIndex] = temp;

    // Recursive call for next index
    recursiveSort(arr, index + 1);
}

// Example usage:
let array = [5, 3, 8, 1, 2];
recursiveSort(array);
console.log(array);  // Output: [1, 2, 3, 5, 8]
