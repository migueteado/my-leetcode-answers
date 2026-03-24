function intersect(nums1: number[], nums2: number[]): number[] {
  const result = [];
  const map = new Map<number, number>();
  for (const n of nums1) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }
  for (const n of nums2) {
    const count = map.get(n) ?? 0;
    if (count > 0) {
      result.push(n);
      map.set(n, count - 1);
    }
  }

  return result;
}
