function minEatingSpeed(piles: number[], h: number): number {
  function helper(piles: number[], h: number, k: number) {
    let counter = 0;
    for (const pile of piles) {
      counter += Math.ceil(pile / k);
    }
    return counter <= h;
  }

  let min = 1;
  let max = Math.max(...piles);
  while (min < max) {
    const k = Math.floor((min + max) / 2);
    if (helper(piles, h, k)) {
      max = k;
    } else {
      min = k + 1;
    }
  }

  return min;
}
