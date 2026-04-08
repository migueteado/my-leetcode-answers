export function containsDuplicate(nums: number[]): boolean {
  const numbersSet = new Set<number>();
  for (const n of nums) {
    if (numbersSet.has(n)) {
      return true;
    } else {
      numbersSet.add(n);
    }
  }
  return false;
}
