function longestPalindrome(s: string): string {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const curr = s.slice(left + 1, right);
    if (curr.length > longest.length) {
      longest = curr;
    }
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const curr2 = s.slice(left + 1, right);
    if (curr2.length > longest.length) {
      longest = curr2;
    }
  }
  return longest;
}
