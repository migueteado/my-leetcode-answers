function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    const currentHeight = i === heights.length ? 0 : heights[i];

    while (
      stack.length > 0 &&
      currentHeight < heights[stack[stack.length - 1]]
    ) {
      const height = heights[stack.pop()!];
      const leftBoundary = stack.length > 0 ? stack[stack.length - 1] : -1;
      const width = i - leftBoundary - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}
