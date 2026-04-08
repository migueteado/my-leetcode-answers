export function countSubstrings(s: string): number {
  function expand(left: number, right: number): number {
    let res = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      res++;
      left--;
      right++;
    }

    return res;
  }

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += expand(i, i); // Odd palindrome
    count += expand(i, i + 1); // Even palindrome
  }
  return count;
}
