// This is a dynamic programming problem
// This is a min/max cost problem
// Use a bottom up approach because it is cleaner and easier to follow
// At each step select the best robbing option between
// i-2 + i houses and i-1 houses
export function rob(nums: number[]): number {
  // If only one house just rob it
  if (nums.length <= 1) {
    return nums[0];
  }
  // Initialize accumulators at 0 to prevent bias
  let prev2 = 0; // best before any house
  let prev1 = 0; // best before any house
  for (let i = 0; i < nums.length; i++) {
    // Pick the max profit between i-2 + i or i-1
    const current = Math.max(prev2 + nums[i], prev1);
    // Move up the window
    prev2 = prev1;
    prev1 = current;
  }
  // Pick the most profit at the end
  return Math.max(prev2, prev1);
}
