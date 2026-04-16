export function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    console.log(`${start} + (${end} - ${start}) / 2 = ${mid}`);

    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
