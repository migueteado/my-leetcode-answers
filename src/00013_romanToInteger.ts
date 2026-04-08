export function romanToInt(s: string): number {
  const map: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const array = s.split("");
  let result = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    let value = map[array[i]];
    let nextValue = i === array.length - 1 ? 0 : map[array[i + 1]];
    if (nextValue > value) {
      value = -value;
    }
    result += value;
  }
  return result;
}
