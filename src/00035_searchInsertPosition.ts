/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-03
 *
 * Hardest step: The hardest part for me was to understand the placement of target
 * when it was not found, initially I tought it would be left - 1, but then I
 * noticed that it should displace nums[left] when target is lower, so the right
 * answer was left. Or left + 1 when target was higher.
 *
 * What I almost skipped: I almost skipped adding or subtracting 1 when moving the
 * pointers, noticing that middle was already invalidated
 *
 * What slowing down revealed: Slowed down showed me the logic to find the insert
 * position when target was not found, and properly discard middle in each iteration
 * of the binary search.
 */
export function searchInsert(nums: number[], target: number): number {
  // Start 2 pointers, one at each end of the array
  let left = 0;
  let right = nums.length - 1;
  // Loop until pointers pass each other or you found target
  // There is a chance that pointers will meet at target, that is why
  // I keep the loop up to that iteration, yet if the middle point
  // of that last iteration is less than target, left will be moved
  // to the right, which gives the correct position for target
  // on the other case left will stay in place and right will be
  // moved to the left, which exits the loop and return left
  // at the right position
  while (left <= right) {
    // Find the middle point between the pointers
    // If middle numbers is target, return middle
    // If middle number is higher than target, move right to middle - 1
    // If middle number is lower than target, move left to middle + 1
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  // Nothing found, return left
  return left;
}
