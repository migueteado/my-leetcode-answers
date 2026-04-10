/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-10
 *
 * Disclaimer: My approach was to traverse the array with two pointers, moving them
 * to reach the desired sum k while keeping a sum variables that would track the current sum
 * of the elements included in the subarray at a given time. That solution worked for the
 * sample cases but would break for the more complex edge cases. Below there is the most
 * optimal solution for this problem.
 *
 * Working out by hand only the example cases did not work for this problem.
 *
 * Hardest step: The hardest part was to understand how keeping a map of cumulative sum
 * occurrences would help me get to the result. I included the explanation as I understood it
 * in the code comments.
 *
 * What I almost skipped: the {0: 1} initialization for the map that guards against subarrays
 * that start at 0.
 *
 * What slowing down revealed: slowing down revealed that my two-pointer instinct was
 * pattern-matching to sliding window problems, but this one has no monotonicity guarantee,
 * so the window can't be grown/shrunk predictably
 */

/**
 * This problem uses an interesting pattern called
 * prefix sum + complement lookup
 * prefix sum is also known as running sum or cumulative sum
 * The idea is to keep track of the cumulative sum at each position
 * and use a map to store the frequency of each sum
 */
export function subarraySum(nums: number[], k: number): number {
  // start a counter to keep track of the valid results
  // start a accumulator (sum) that will help us keep track of
  // the total sum of numbers at every point of the array
  let counter = 0;
  let sum = 0;
  // start a map to keep track of the ocurrences of each sum along
  // the array
  const prefixSum: Map<number, number> = new Map();
  // Start the map with 1 occurrence for 0 to handle cases when
  // the first number of the array is a coincidence to k
  prefixSum.set(0, 1);

  // Loop through every number in the array, keep adding them to sum
  // verify if we have already encountered a coincidence of the number
  // Every subarray within nums that can add up to k has to be k = sum[i] - sum[j]
  // where i is the end of the subarray
  // and j is the position previous to the start of the subarray
  //
  // With that in mind I get to this equation:
  // k = sum[j -> i]
  // then k = sum[i] - sum[j]
  // then k + sum[j] = sum[i]
  // then sum[j] = sum[i] - k
  //
  // And then finally:
  // complement = sum - k
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const complement = sum - k;
    // If I match a complement in the map, it means that I have found a subarray
    // because I have reached that sum in the past, in other words
    // that means that sum[i] - sum[j] = k
    // that is what I'm looking for, an array that from j + 1 to i add up to k
    if (prefixSum.has(complement)) counter += prefixSum.get(complement);
    // Add to the counter of the specific sum, that way I know how many times
    // in the past I have gottent to that specific sum
    prefixSum.set(sum, (prefixSum.get(sum) ?? 0) + 1);
  }

  // return the counter
  return counter;
}
