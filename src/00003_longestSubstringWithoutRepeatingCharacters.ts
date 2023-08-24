function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let curr = "";
  for (let i = 0; i < s.length; i++) {
    const index = curr.indexOf(s[i]);
    if (index > -1) {
      curr = curr.slice(index + 1);
    }
    curr += s[i];
    longest = Math.max(longest, curr.length);
  }
  return longest;
}
