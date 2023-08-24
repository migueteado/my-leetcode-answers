function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Merge the two arrays and sort them
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  // Find the middle of the merged array
  const middle = Math.floor(merged.length / 2);
  // If the merged array is even, return the average of the two middle numbers
  if (merged.length % 2 === 0) {
    return (merged[middle - 1] + merged[middle]) / 2;
  }
  // If the merged array is odd, return the middle number
  return merged[middle];
}
