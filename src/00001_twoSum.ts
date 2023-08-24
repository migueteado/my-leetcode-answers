function twoSum(nums: number[], target: number): number[] {
  // Create a map to save the difference and the index
  const numsMap: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // Get the difference between the target and the current number
    const diff = target - nums[i];
    // If the difference is in the map, return the index of the difference and the current index
    if (numsMap.has(nums[i])) {
      return [numsMap.get(nums[i])!, i];
    }
    // Add the difference and the current index to the map
    numsMap.set(diff, i);
  }

  // If no solution is found, return an empty array
  return [];
}
