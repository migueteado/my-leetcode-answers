/*
 * PROBLEM SOLVING LOG
 * Date: 2026-03-29
 *
 * Hardest step: Ths hardest part was to avoid duplicates in each loop. Luckily the pattern
 * is similar to problem 15 (3Sum)
 *
 * What I almost skipped: I actually skipped the duplicate validation within the innermost
 * loop. I had to adjust it in later iterations
 *
 * What slowing down revealed: Slowing down revealed many things for me:
 * - The exit condition of the 2 outer loops, I did not need to traverse every number in those
 * - The requirement to sort the array beforehand, I noticed that pattern in the examples.
 * - The need to not verify for duplicates in the first iteration of the two fixed positions
 * that was necessary for the edge case where all the numbers in the array were the same
 */

function fourSum(nums: number[], target: number): number[][] {
  let results: number[][] = [];

  // Sort the array in non-decreasing order
  // This will help us avoid duplicates and reduce repeated operations
  nums = nums.sort((a, b) => a - b);

  // Create a loop to hold the first fixed number a
  // This loop goes up to a < nums.length - 3
  // the inner loops require at least 3 more numbers for a match
  // Add a guard so that we break the loop when nums[a] > target
  // this already means that we will not find any more coincidences
  // Add a guard so that when nums[a] === nums[a-1] we skip
  // this avoids duplicates by repeating the same number in the same fixed position
  for (let a = 0; a < nums.length - 3; a++) {
    // if number at a is higher than target, there are
    // no more matches
    // remove guard, target is not guaranteed to be a positive value
    // if (nums[a] > target) {
    //   break;
    // }

    // Skip duplicated fixed numbers
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue;
    }

    // Create a loop to gold the second fixed number b
    // This loop goes up to b < nums.length - 2
    // the inner loops require at least 2 more numbers for a match
    // Add the same guards as in the outer loop
    for (let b = a + 1; b < nums.length - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) {
        continue;
      }

      // Start two pointers. c at b + 1. d at nums.length - 1
      // in each iteration verify if nums[a] + nums[b] + nums[c] + nums[d] = target
      // if they do, push to results and move c and d inward
      // if they sum to a higher number, move d to the left
      // if they sum to a lower number, move c to the right
      // include the same guard to avoid duplicates as in the outer loops
      let c = b + 1;
      let d = nums.length - 1;
      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum === target) {
          results.push([nums[a], nums[b], nums[c], nums[d]]);
          c++;
          d--;
          // Same guard as in the outer loops
          while (c < d && nums[c] === nums[c - 1]) c++;
          while (c < d && nums[d] === nums[d + 1]) d--;
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }
      }
    }
  }

  // return the list of results
  return results;
}
