function isHappy(n: number): boolean {
  const track = new Set<number>();

  while (true) {
    track.add(n);
    const digits = [...String(n)].map(Number);
    const sum = digits.reduce((acc, curr) => acc + curr ** 2, 0);

    if (sum === 1) {
      return true;
    }

    if (track.has(sum)) {
      return false;
    }

    n = sum;
  }
}
