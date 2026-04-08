/*
 * PROBLEM SOLVING LOG
 * Date: 2026-03-27
 *
 * Hardest step: The hardest part wasnot jumping to the direct solution which was
 * nums = Array.from(new Set(nums))
 * return nums.length
 * But the problem requested us to make the changes in place, therefore this solution is not valid.
 * Also that solutions requires O(n) space, while a in-place replacement requries O(1).
 * After that, the hardest part was to define how the two pointers were supposed to move
 *
 * What I almost skipped: My initial solution had a problem in the assignation of
 * nums[left + 1] = nums[right]; I had used a strict equality operator by writing too fast
 *
 * What slowing down revealed: It revealed the way to traverse the array fully only once with one
 * of the pointers, which was an interesting outcome.
 */
export function removeDuplicates(nums: number[]): number {
  // There is no case for empty arrays, the problems assures us that array has a length of at least 1
  // Array is guaranteed to be sorted in non-decreasing order
  // This is a Two Pointer problem because I need to keep comparing elements from two different parts
  // of the array that are not always adjacent to each other.
  // I start left and right next to each other for the first comparison
  let left = 0;
  let right = 1;
  // For cases where nums.length = 1 this loop is never reached, there are no duplicates
  // the result still is left + 1 and the array does not need to be modified.
  // The loop runs until right has reached the end of the array and therefore traversed all possible unique numbers
  // When num at left index is equal to num at right index keep moving right index
  // when a difference is found, update the num next to left index with the num found at right index
  // then move both pointer forward, now having left at the last unrepeated number and right at its
  // its next index
  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      right++;
    } else {
      nums[left + 1] = nums[right];
      left++;
      right++;
    }
  }
  // The length of the resulting relevant array is always the index
  // of the last number + 1
  return left + 1;
}
