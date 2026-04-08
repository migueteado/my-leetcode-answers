// This is a base binary search problem
// The idea is to keep splitting the search area by half in each iteration
export function search(nums: number[], target: number): number {
  // initial pointers/delimiters
  let left = 0;
  let right = nums.length - 1;

  // while the pointers have not met
  while (left <= right) {
    // get the middle point to split the search in half
    const mid = Math.floor((left + right) / 2);
    // if middle point is the target
    if (nums[mid] === target) return mid;
    // if middle point is less than the target, increase left by
    // middle + 1 to include middle in the discard
    else if (nums[mid] < target) left = mid + 1;
    // if middle point is more than the target, decrease right by
    // middle - 1 to include middle in the discard
    else right = mid - 1;
  }

  // not found, return -1
  return -1;
}
