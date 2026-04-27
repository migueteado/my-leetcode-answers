export function pascalsTriangle2(rowIndex: number): number[] {
  let prev: number[] = [];
  for (let i = 0; i <= rowIndex; i++) {
    const curr: number[] = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        curr.push(1);
      } else {
        curr.push(prev[j - 1] + prev[j]);
      }
    }
    prev = curr;
  }
  return prev;
}
