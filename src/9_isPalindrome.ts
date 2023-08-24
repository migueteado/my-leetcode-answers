function isPalindrome(x: number): boolean {
  // 1. Convert to string
  const xString = x.toString();
  // 2. Reverse string
  const xReversed = xString.split("").reverse().join("");
  // 3. Compare
  return xString === xReversed;
}
