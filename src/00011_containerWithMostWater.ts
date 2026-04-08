export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  // Execute while the pointers do not meet
  while (left < right) {
    // Area calculation is shorter side * separation
    const area = Math.min(height[left], height[right]) * (right - left);
    // Keep always the bigger area
    maxArea = Math.max(maxArea, area);
    // Move the pointer of the shorter side
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
