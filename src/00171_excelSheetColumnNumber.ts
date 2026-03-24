// They are always uppercase letters
function titleToNumber(columnTitle: string): number {
  const letters = columnTitle.split("");
  const length = letters.length;
  let result = 0;
  for (let i = length; i > 0; i--) {
    // power keeps increasing as we move to the left: 0, 1, 2, 3, 4...
    const power = length - i;
    // Sustract ASCII number so that A = 1
    const letterNumber = letters[i - 1].charCodeAt(0) - 64;
    // 26 is the number of letter available
    // 26 elevated to the power gives us the number by which we have to multiply
    // the letter value to get the right value
    // In a 26 number based system each additional digit to the left requires
    // a multiplication by 26
    // 26 ^ 0 = 1
    // 26 ^ 1 = 26
    // 26 ^ 2 = 676
    const multiplier = 26 ** power;
    result += letterNumber * multiplier;
  }
  return result;
}
