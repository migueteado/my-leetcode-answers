export function isValid(s: string): boolean {
  // Odd lengths are invalid by default
  // because for porper closing it needs an
  // even number of parentheses
  if (s.length % 2 !== 0) {
    return false;
  }

  // Map the possible pairs
  const map: Record<string, string> = { ")": "(", "}": "{", "]": "[" };
  // Create an array, it will be used as an stack
  // with Array.push() and Array.pop()
  const stack: string[] = [];
  for (const char of s) {
    if (map[char]) {
      // Map has the key, then is a closing parentheses
      // Check if the last parentheses stores
      // equals the opening parentheses for this closing parentheses
      if (stack.pop() !== map[char]) return false;
    } else {
      // Push the opening parentheses to the stack
      stack.push(char);
    }
  }

  // If there are still items in the stack
  // there are unclosed parentheses
  return stack.length === 0;
}
