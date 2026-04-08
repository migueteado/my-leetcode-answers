/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-03
 *
 * Hardest step: The hardest aprt was to understand the mapping pattern, I initially used
 * a hashmap to include all the posibilities and handled two different cases: additive and
 * subtractive. I was also handling the numbers positions using math
 *
 * What I almost skipped: I did understand how the mechanics of the roman numerals worked
 * but I did not see the pattern to use a greedy lookup approach. I almost skipped the case
 * when the number was 0 in my initial answer
 *
 * What slowing down revealed: Slowing down revealed the additive/subtractive structure and got me close — I even considered adding the special cases to the map. The missing step was recognizing that the problem needed ordered iteration, not key lookup, which would have made the greedy approach visible.
 */
export function intToRoman(num: number): string {
  // Instead of using a map, we will use two arrays to store the values
  // and their corresponding Roman numerals. This is another way of
  // mapping as they share the index
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";
  // Loop from larger to lesser numbers
  for (let i = 0; i < values.length; i++) {
    // Substract as much as possible in each iteration
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
}

// My Initial answer
// function intToRoman(num: number): string {
//   const map: Record<number, string> = {
//     1: "I",
//     5: "V",
//     10: "X",
//     50: "L",
//     100: "C",
//     500: "D",
//     1000: "M",
//   };

//   function additiveForm(n: number, pow: number): string {
//     let curr = n;
//     while (!map[curr * pow] && curr >= 1) {
//       curr--;
//     }
//     const romanNumeral = map[curr * pow];
//     curr = n - curr;
//     if (curr > 0) {
//       return romanNumeral + additiveForm(curr, pow);
//     }
//     return romanNumeral;
//   }

//   function subtractingForm(n: number, pow: number): string {
//     return `${map[1 * pow]}${map[(n + 1) * pow]}`;
//   }

//   const numbers = num
//     .toString()
//     .split("")
//     .map((n) => Number(n));
//   const length = numbers.length - 1;
//   let result: string = "";

//   for (let i = 0; i <= length; i++) {
//     if (numbers[i] === 0) continue;
//     if (numbers[i] === 4 || numbers[i] === 9)
//       result += subtractingForm(numbers[i], 10 ** (length - i));
//     else result += additiveForm(numbers[i], 10 ** (length - i));
//   }

//   return result;
// }
