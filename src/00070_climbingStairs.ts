// This is a dynamic programming problem
// This is a count ways problem
// Use a bottom up approach since it is easier to follow
// The idea is that we will keep track of the number of ways to reach each step
// and keep accumulating them
export function climbStairs(n: number): number {
  // no steps or only one, return the total ways
  // 1 step = 1 way
  // 0 steps = 0 ways
  if (n <= 1) {
    return n;
  }
  // initial ways
  let prev2 = 0;
  let prev1 = 1;
  for (let i = 0; i < n; i++) {
    // the current count of ways equals the sum of the previous two
    // the ways to reach the previous two steps
    // this is the same for each subsequent step
    const curr = prev1 + prev2;
    // move up
    prev2 = prev1;
    prev1 = curr;
  }
  // return the total ways to reach the top
  return prev1;
}
