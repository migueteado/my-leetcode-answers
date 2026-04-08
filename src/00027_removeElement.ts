/*
 * PROBLEM SOLVING LOG
 * Date: 2026-03-28
 *
 * Hardest step: The most tricky part I think was identifying what to return
 *
 * What I almost skipped: I almost created a temp variable when swapping the numbers
 * from left and right but I noticed that this temp variable would have the same value
 * as val and that I could as well use val instead
 *
 * What slowing down revealed: Slowing down revealed edge cases such as val being a
 * number above 50 while nums could only contain numbers up to 50. It also revealed
 * issue with directly returning left without verifying if it was on a coincidence
 * or not beforehand
 */

// This problem can be solved with a two pointers approach
// traversing nums from both sides
export function removeElement(nums: number[], val: number): number {
  // Verify if nums is empty
  if (nums.length === 0) return nums.length;
  // The function handles this case correctly without the guard.
  // but it was an interesting detail from the problem's specs
  // if (val > 50) return nums.length;

  // Start the pointers
  let left = 0;
  let right = nums.length - 1;
  // Loop while the two pointers have not met
  while (left < right) {
    // Move right to the left until it is not on a coincidence
    if (nums[left] !== val) {
      left++;
    } else if (nums[right] === val) {
      right--;
    } else {
      // When left finds a coincidence,
      // swap it with right and move both pointers inward
      nums[left] = nums[right];
      nums[right] = val;
      right--;
      left++;
    }
  }

  // Verify if left pointer is in an coincidence
  return nums[left] === val ? left : left + 1;
}
