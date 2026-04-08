// Comparing helper function
export function matches(s1Count: number[], s2Count: number[]) {
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] !== s2Count[i]) return false;
  }

  return true;
}

export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  // Use an array of 26 slots, english lowercase letter are 26 in total
  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);

  // Populate the array for s1 and first window of s2
  for (let i = 0; i < s1.length; i++) {
    // charCodeAt() retunr ths ASCII code of the letter
    // by substracting the number for "a" we make sure that
    // "a" -> 0, "b" -> 1, ..., "z" -> 25
    // which matches our array indices
    s1Count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    s2Count[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  if (matches(s1Count, s2Count)) return true;

  // Move the sliding window and compare in each iteration
  for (let i = s1.length; i < s2.length; i++) {
    s2Count[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
    s2Count[s2.charCodeAt(i - s1.length) - "a".charCodeAt(0)]--;
    if (matches(s1Count, s2Count)) return true;
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo")); // true)
