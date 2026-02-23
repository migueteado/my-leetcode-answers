function isPalindrome(s: string): boolean {
  const sArray = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  const length = Math.ceil(sArray.length / 2);
  for (let i = 0; i < length; i++) {
    if (sArray[i] !== sArray[sArray.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
