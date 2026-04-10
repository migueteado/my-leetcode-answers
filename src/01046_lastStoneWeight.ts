/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-09
 *
 * Hardest step: The hardest step was finding the best way to determine the proper index of
 * the remaining stone if there was any
 *
 * What I almost skipped: I almost skipped setting left to the middle point and breaking the
 * loop. That is a variation of the binary search that I had not dealt with yet
 *
 * What slowing down revealed: Slowing down revealed many things:
 * - Sorting the array in advance gives me a clearer way to operate and reduce operations
 * in the long run
 * - Sorting the array in non-decreasing order allows me to just operate on the end of
 * the array using pop, which is more efficient than shift as it is only O(1), instead of
 * shift O(n).
 * - Using a binary search is the most efficient way to determine the correct position
 * for the new stone as it is O(log n), using a linear search would have been O(n) in
 * the worst case.
 */
export function lastStoneWeight(stones: number[]): number {
  // sort the array to reduce operations later
  stones = stones.sort((a, b) => a - b);

  // Iterate while stones.length > 1
  while (stones.length > 1) {
    // Pop last two elements of the array, assign them to y and x
    const y = stones.pop();
    const x = stones.pop();
    // subtract x from y
    const z = y - x;

    // if result > 0, add result to array in correct position
    if (z > 0) {
      let left = 0;
      let right = stones.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (stones[mid] === z) {
          left = mid;
          break;
        } else if (stones[mid] > z) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }

      stones.splice(left, 0, z);
    }
  }

  // return either the last remaining element of the array or 0
  return stones.length > 0 ? stones[0] : 0;
}
