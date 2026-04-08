export function threeSum(nums: number[]): number[][] {
  // Sort the array in advance, this reduces complexity
  // by ordering numbers from lowest to highest
  nums = nums.sort((a, b) => a - b);

  const triplets: number[][] = [];

  // We will do a for loop where num[i] will be our static number
  // this facilitates the comparison, with this approach the code inside
  // the loop is just a twoSum.
  // We will use a two opposite pointer approach to reduce the complexity
  for (let i = 0; i < nums.length; i++) {
    // If we are already at 0 it is impossible to find numbers that
    // added together result in 0
    if (nums[i] > 0) {
      break;
    }

    // If the previous number is equal to the current number, skip
    // this is to avoid duplicates
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    // Left pointer, always has to be after the static number
    let left = i + 1;
    // Right pointer
    let right = nums.length - 1;
    // While ponters have not met
    while (left < right) {
      // If the static numbers + pointers result in 0
      if (nums[i] + nums[left] + nums[right] === 0) {
        // Push the match
        triplets.push([nums[i], nums[left], nums[right]]);
        // We found a match, move both pointers to avoid infinite loop
        left++;
        right--;
        // Skip duplicates, move left and right pointers until we find different numbers
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
        // If sum is too high we have to reduce the number, move right pointer
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
        // Sum is too low we have to increase the number, move left pointer
      } else {
        left++;
      }
    }
  }

  return triplets;
}
