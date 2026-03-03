function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let curr = "";
  for (let i = 0; i < s.length; i++) {
    // Check if letter is in current
    const index = curr.indexOf(s[i]);
    // Found the letter
    if (index > -1) {
      // Remove the part of the string up to and including the repeated character
      curr = curr.slice(index + 1);
    }
    // Add the letter
    curr += s[i];
    // Get the longest between longest and current
    longest = Math.max(longest, curr.length);
  }
  return longest;
}
