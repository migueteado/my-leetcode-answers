function reverse(n: number): number {
  // Start with reversed as 0
  let reversed = 0;
  // While n is not 0
  // This loop keeps iterating while we change the numbers in n to reversed going backwards
  while (n !== 0) {
    // Divide n by 10 and get the remainder (this always gives the last number of n)
    // If you have 123, 123 % 10 = 3
    const lastDigit = n % 10;
    // Multiply reversed by 10 and add the last digit of n
    // If you have 123, 0 * 10 + 3 = 3
    reversed = reversed * 10 + lastDigit;
    // Divide n by 10 and truncate the decimal
    // If you have 123, 123 / 10 = 12.3, Math.trunc(12.3) = 12
    n = Math.trunc(n / 10);
  }

  // Check for overflow for 32-bit signed integer
  if (reversed > 2 ** 31 - 1 || reversed < -(2 ** 31)) {
    return 0;
  }

  // Return reversed
  return reversed;
}
