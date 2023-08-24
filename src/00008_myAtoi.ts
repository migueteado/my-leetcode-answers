function myAtoi(s: string) {
  // Set upper clamp
  const max = Math.pow(2, 31) - 1;
  // Set lower clamp
  const min = Math.pow(-2, 31);
  // Parse string to int
  const num = parseInt(s, 10);
  // If NaN it never contained a number
  if (isNaN(num)) {
    return 0;
  }
  if (num > max) {
    return max;
  }
  if (num < min) {
    return min;
  }
  return num;
}
