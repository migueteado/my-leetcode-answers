function searchMatrix2(matrix: number[][], target: number): boolean {
  // 1. Start at top right
  let row = 0;
  let col = matrix[0].length - 1;
  // 2. Loop until out of bounds
  while (row < matrix.length && col >= 0) {
    // 3. If target found, return true
    if (matrix[row][col] === target) {
      return true;
    }
    // 4. If target is less than current value, move left
    if (matrix[row][col] > target) {
      col--;
    } else {
      // 5. If target is greater than current value, move down
      row++;
    }
  }
  // 6. Return false
  return false;
}
