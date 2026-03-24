// Using Gauss formula
function missingNumber(nums: number[]): number {
  const expected = (nums.length * (nums.length + 1)) / 2;
  return expected - nums.reduce((prev, curr) => prev + curr, 0);
}
