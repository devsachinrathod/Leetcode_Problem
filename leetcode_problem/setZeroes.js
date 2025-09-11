function setZeroes(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  console.log(cols);

  let firstRowZero = false;
  let firstColZero = false;

  // 1. Check if first row needs to be zero
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // 2. Check if first column needs to be zero
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // 3. Use first row & col as markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // 4. Set zeroes based on markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // 5. Zero out first row if needed
  if (firstRowZero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // 6. Zero out first column if needed
  if (firstColZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
}

setZeroes([1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]);

