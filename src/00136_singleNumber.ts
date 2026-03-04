// This is a bit manipulation problem
// The XOR operation has the property that a ^ a = 0 and a ^ 0 = a
// So when we XOR all numbers together,
// the pairs will cancel out and only the single number will remain
function singleNumber(nums: number[]): number {
  return nums.reduce((acc, num) => acc ^ num, 0);
}
