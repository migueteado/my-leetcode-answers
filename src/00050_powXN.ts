function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let pow = 1;
  while (n != 0) {
    if (n % 2 != 0) {
      pow *= x;
    }

    x *= x;
    n = Math.trunc(n / 2);
  }
  return pow;
}
