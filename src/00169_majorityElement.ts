// My initial solution
function majorityElement(nums: number[]): number {
  const map = new Map<number, number>();
  let higherFrequency = 0;
  let result = nums[0];
  for (const n of nums) {
    const curr = (map.get(n) ?? 0) + 1;
    map.set(n, curr);
    if (curr > higherFrequency) {
      higherFrequency = curr;
      result = n;
    }
  }
  return result;
}

// O(1) space complexity using Boyer-Moore Voting Algorithm
// This algorithm only works if the majority elements is more tah n / 2
// being n = nums.length
// function majorityElement(nums: number[]): number {
//   let candidate = nums[0]
//   let count = 0
//   for(const n of nums) {
//     if(count === 0) candidate = n
//     count += n === candidate ? 1 : -1
//   }
//   return candidate
// }

// Example:
// Input: [2,2,1,1,1,2,2]
// Iterations:
// 1. n = 2, count = 0, candidate = 2, count = 1
// 2. n = 2, count = 1, candidate = 2, count = 2
// 3. n = 1, count = 2, candidate = 2, count = 1
// 4. n = 1, count = 1, candidate = 2, count = 0
// 5. n = 1, count = 0, candidate = 1, count = 1
// 6. n = 2, count = 1, candidate = 1, count = 0
// 7. n = 2, count = 0, candidate = 2, count = 1
// Return: 2
