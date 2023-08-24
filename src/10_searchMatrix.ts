function searchMatrix(matrix: number[][], target: number): boolean {
  // 1. Flatten matrix
  const flatMatrix = matrix.flat();
  // 2. Binary search
  let left = 0;
  let right = flatMatrix.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (flatMatrix[mid] === target) {
      return true;
    }
    if (flatMatrix[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // 3. Return false
  return false;
}
