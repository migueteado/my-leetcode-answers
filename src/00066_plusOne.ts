function plusOne(digits: number[]): number[] {
  let remaining = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const d = digits[i] + remaining;
    if (d > 9) {
      digits[i] = 0;
      remaining = 1;
    } else {
      digits[i] = d;
      remaining = 0;
      break;
    }
  }
  if (remaining) {
    digits.unshift(remaining);
  }
  return digits;
}
