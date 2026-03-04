// This is a dynamic programming problem
// This is a min/max cost problem
// This problems includes a circular constraint
// To solve it separate the problem into two subproblems
// Removing the circular constraint and making it
// into 2 linear problems
function rob2(nums: number[]): number {
  // If only one house just rob it
  if (nums.length <= 1) {
    return nums[0];
  }

  // Utility function, reference 00198_houseRobber.ts
  function rob(nums: number[]): number {
    if (nums.length <= 1) {
      return nums[0];
    }

    let prev2 = 0;
    let prev1 = 0;
    for (let i = 0; i < nums.length; i++) {
      let current = Math.max(prev2 + nums[i], prev1);
      prev2 = prev1;
      prev1 = current;
    }

    return Math.max(prev2, prev1);
  }

  // By creating two arrays in which houses 0 and N
  // are never together in the process the constraint is removed
  // and now we have 00198_houseRobber.ts twice
  let result1 = rob(nums.slice(0, nums.length - 1));
  let result2 = rob(nums.slice(1, nums.length));

  // Return the maximum profit from the two scenarios
  return Math.max(result1, result2);
}
