// This is a sliding window problem
// It requires a two pointer approach, left and right.
// Right will move in each iteration, left will move when required
export function characterReplacement(s: string, k: number): number {
  // Map to keep traack of character repetitions
  const map = new Map<string, number>();
  // Keep track of the most repeated character in current iteration
  let maxFrequency = 0;
  // Keep track of longest length that has been reached
  let maxLength = 0;
  // Left pointer
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // Frequency of current character
    const count = (map.get(s[right]) ?? 0) + 1;
    map.set(s[right], count);
    // Update maxFrequency when surpassed
    maxFrequency = Math.max(maxFrequency, count);

    // Move left when the window size exceeds the allowed number of replacements
    if (right - left + 1 - maxFrequency > k) {
      // Decrease frequency of leftmost character
      map.set(s[left], map.get(s[left])! - 1);
      left++;
    }

    // Update maxLength when surpassed
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
