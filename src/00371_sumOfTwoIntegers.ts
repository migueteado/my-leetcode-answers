// 2 = 010
// 3 = 011
// 2 ^ 3 = 001 = 1
// 2 & 3 = 010 = 2
// Left shift operator, moves to the left n times and fills with 0s
// 2 << 1 = 100 = 4
// 3 << 1 = 110 = 6
// Right shift operator, moves to the right n times and fills with 0s
// 2 >> 1 = 001 = 1
// 3 >> 1 = 001 = 1
function getSum(a: number, b: number): number {
  // The carry, for example:
  // (2 & 3) << 1 = (010 & 011) << 1 = 010 << 1 = 100
  const carry = (a & b) << 1;
  if (carry === 0) {
    // If carry is 0 we return the XOR operation
    return a ^ b;
  } else {
    // If carry is higher than 0 we have to do the operation again
    // since we cannot use + to sum both numbers
    return getSum(a ^ b, carry);
  }
}
