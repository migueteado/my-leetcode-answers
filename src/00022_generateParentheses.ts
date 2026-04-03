/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-02
 *
 * Hardest step: The hardest part was to understand the pattern, I initially tried to solve
 * it using an iterative approach. I ended up looking at the solutions to understand how
 * to solve it.
 *
 * What I almost skipped: I didn't understand a proper way to do this problem with dynamic
 * programming. I didn't properly recognize the pattern until I took into consideration
 * how parentheses should behave.
 *
 * What slowing down revealed: Slowing down didn't help me with this problem. I didn't have
 * the knowledge to tackle this problem from the right approach.
 */
function generateParenthesis(n: number): string[] {
  // Declare result before the helper function, that way due to hoisting
  // we can access it from within the helper function
  const result: string[] = [];

  function dfsHelper(openP: number, closeP: number, s: string) {
    // If openP and closeP are equal and they sum up to twice n that means that we have
    // reached the amount of parentheses pairs that we need
    if (openP === closeP && openP + closeP === n * 2) {
      result.push(s);
      return;
    }

    // When openP is less than n that means that we can add an open paranthesis
    if (openP < n) {
      dfsHelper(openP + 1, closeP, s + "(");
    }

    // When closeP is less than openP that means that we can add a close parenthesis
    if (closeP < openP) {
      dfsHelper(openP, closeP + 1, s + ")");
    }
  }

  // Start from the ground up
  dfsHelper(0, 0, "");

  return result;
}

// Tree for n = 3, each node is (openP, closeP, s):
//
// dfsHelper(0, 0, "")
// └── open < 3 → add "("
//     dfsHelper(1, 0, "(")
//     ├── open < 3 → add "("
//     │   dfsHelper(2, 0, "((")
//     │   ├── open < 3 → add "("
//     │   │   dfsHelper(3, 0, "(((")
//     │   │   └── close < open → add ")"
//     │   │       dfsHelper(3, 1, "((()")
//     │   │       └── close < open → add ")"
//     │   │           dfsHelper(3, 2, "((())")
//     │   │           └── close < open → add ")"
//     │   │               dfsHelper(3, 3, "((()))") ✅ PUSH
//     │   └── close < open → add ")"
//     │       dfsHelper(2, 1, "(()")
//     │       ├── open < 3 → add "("
//     │       │   dfsHelper(3, 1, "(()(" )
//     │       │   └── close < open → add ")"
//     │       │       dfsHelper(3, 2, "(()()")
//     │       │       └── close < open → add ")"
//     │       │           dfsHelper(3, 3, "(()())") ✅ PUSH
//     │       └── close < open → add ")"
//     │           dfsHelper(2, 2, "(())")
//     │           └── open < 3 → add "("
//     │               dfsHelper(3, 2, "(())(")
//     │               └── close < open → add ")"
//     │                   dfsHelper(3, 3, "(())()") ✅ PUSH
//     └── close < open → add ")"
//         dfsHelper(1, 1, "()")
//         └── open < 3 → add "("  [close NOT < open, so no ")" branch]
//             dfsHelper(2, 1, "()(")
//             ├── open < 3 → add "("
//             │   dfsHelper(3, 1, "()((")
//             │   └── close < open → add ")"
//             │       dfsHelper(3, 2, "()(()")
//             │       └── close < open → add ")"
//             │           dfsHelper(3, 3, "()(())") ✅ PUSH
//             └── close < open → add ")"
//                 dfsHelper(2, 2, "()()")
//                 └── open < 3 → add "("
//                     dfsHelper(3, 2, "()()(" )
//                     └── close < open → add ")"
//                         dfsHelper(3, 3, "()()()") ✅ PUSH
//
// Result: ["((()))", "(()())", "(())()", "()(())", "()()()"]
