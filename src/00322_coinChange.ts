export function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (const c of coins) {
      if (c <= i) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
