function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let max = 0;

  for (const num of set) {
    // Only start counting from the beginning of a sequence
    if (set.has(num - 1)) continue;

    let count = 1;
    while (set.has(num + count)) {
      count++;
    }

    if (count > max) max = count;
  }

  return max;
}
