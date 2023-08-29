function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // If the current price is less than the min price, set the min price to the current price
    if (prices[i] < minPrice) {
      minPrice = prices[i];

      // Jump to next price to see if we get higher profits from this new minPrice
      continue;
    }

    const profit = prices[i] - minPrice;
    // If the current profit is greater than the max profit, set the max profit to the current profit
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}
