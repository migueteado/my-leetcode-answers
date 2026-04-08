export function trap(height: number[]): number {
  // Keep pointer for left side
  let left = 0;
  // Keep pointer for right side
  let right = height.length - 1;
  // Keep track of higher height to the left pointer
  let leftMax = 0;
  // Keep track of higher height to the right pointer
  let rightMax = 0;
  // Accumulator for the result
  let result = 0;

  // While our pointers haven't crossed
  while (left <= right) {
    // Left height is greater than Right height
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        // Current is higher, update leftMax
        leftMax = height[left];
      } else {
        // Current is lower, there is space to trap water
        result += leftMax - height[left];
      }
      // Move to the right
      left++;
    } else {
      if (height[right] >= rightMax) {
        // Current is higher, update rightMax
        rightMax = height[right];
      } else {
        // Current is lower, there is space to trap water
        result += rightMax - height[right];
      }
      // Move to the left
      right--;
    }
  }

  return result;
}
