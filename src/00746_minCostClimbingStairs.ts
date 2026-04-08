// This is a Dynamic programming problem.
// This is a min/max cost problem
// Use a bottom up approach since it is easier to follow
// Start with 2 possible steps, 1 and 2, then we start going up
// The main idea for each iteration is to find the cheapest way
// to get to that step. At the end we will compare the last 2 steps
// and pick the cheapest
export function minCostClimbingStairs(cost: number[]): number {
  // Initial steps
  let prev2 = cost[0];
  let prev1 = cost[1];
  // Start from step in index 2 since the other two are already taken
  for (let i = 2; i < cost.length; i++) {
    // Calculate the cheapest way to get to this step
    const currentCost = cost[i] + Math.min(prev2, prev1);
    // Move up
    prev2 = prev1;
    prev1 = currentCost;
  }
  // Pick the cheapest option
  return Math.min(prev2, prev1);
}
