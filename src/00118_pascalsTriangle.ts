export function pascalsTriangle(numRows: number): number[][] {
  // Define the result
  const result: number[][] = [];
  // Loop for each row of the pascal triangle
  for (let i = 0; i < numRows; i++) {
    // Define the current row
    const row: number[] = [];
    // Loop for each required number for the current row
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        // If start or end of row the number is 1
        row.push(1);
      } else {
        // else sum the two numbers from above
        row.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    // Add row to results
    result.push(row);
  }
  // Return results
  return result;
}
