/*
 * PROBLEM SOLVING LOG
 * Date: 2026-03-27
 *
 * Hardest step: Not overengineering from the start. I almost reduced duplicates
 * with a Set() before reasoning through that it adds guaranteed cost to every run
 * for a benefit that only appears in unlikely inputs. Also spotting that initializing
 * diff at the current word length meant any real diff found would always be lower,
 * making Math.min() on the slice redundant.
 *
 * What I almost skipped: Storing the loop exit condition in a variable instead of
 * recomputing Math.min() on every iteration. Small but real.
 *
 * What slowing down revealed: Writing examples on paper and writing comments before
 * code made the comparison pattern obvious. The algorithm came from the examples,
 * not from trying to recall a technique.
 */
export function longestCommonPrefix(strs: string[]): string {
  // There is no case for empty arrays. The problem assures that length is at least 1
  // The list has only one word. That is the result.
  if (strs.length === 1) {
    return strs[0];
  }

  // Start the comparison string with the first word in the list
  let prefix = strs[0];

  // For each subsequent word, compare them letter by letter using the
  // shortest length as the exit condition for the loop
  // If a differing letter is found before the exit condition, keep the index
  // slice the comparing string at foun index or at current word length
  // the comparison string can never stay longer than the words it has compared to
  // nor than the differing point that has been found
  // if the comparison string reaches a length of 0, break the loop
  for (let i = 1; i < strs.length; i++) {
    let minLength = Math.min(prefix.length, strs[i].length);
    let diff = strs[i].length;
    for (let j = 0; j < minLength; j++) {
      if (prefix[j] !== strs[i][j]) {
        diff = j;
        break;
      }
    }
    if (diff < prefix.length) prefix = prefix.slice(0, diff);
    if (prefix.length === 0) break;
  }

  // return the comparison string
  return prefix;
}
