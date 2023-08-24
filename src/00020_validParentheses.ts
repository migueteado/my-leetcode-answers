function isValidParentheses(s: string): boolean {
  const parenthesesMap = new Map<string, string>([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const sArray = s.split("");
  const expectedArray: string[] = [];
  const openingArray: string[] = Array.from(parenthesesMap.keys());
  for (let i = 0; i < sArray.length; i++) {
    if (openingArray.includes(sArray[i])) {
      expectedArray.push(parenthesesMap.get(sArray[i])!);
    } else {
      if (expectedArray[expectedArray.length - 1] === sArray[i]) {
        expectedArray.pop();
      } else {
        return false;
      }
    }
  }

  if (expectedArray.length > 0) {
    return false;
  }
  return true;
}
