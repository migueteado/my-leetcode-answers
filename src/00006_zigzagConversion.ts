function convert(s: string, numRows: number): string {
  // If numRows is 1, return the string received, no need for zigzag
  if (numRows === 1) {
    return s;
  }
  // Create an array of numRows empty strings
  const rows = new Array(numRows).fill("");
  // Current row is the pointer, it decides what row we are adding letters to.
  let currRow = 0;
  // Going down determines if we are going down or up the zigzag
  let goingDown = false;

  // Iterate through the string
  for (const char of s) {
    // Add the current character to the current row
    rows[currRow] += char;
    // If we are at the top or bottom, change direction
    if (currRow === 0 || currRow === numRows - 1) {
      goingDown = !goingDown;
    }
    // If we are going down, increment the current row, else decrement
    currRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}
