function isAnagram(s: string, t: string): boolean {
  const sLength = s.length;
  const tLength = t.length;
  if (sLength !== tLength) {
    return false;
  }

  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (let i = 0; i < sLength; i++) {
    const sQuantity = (sMap.get(s[i]) ?? 0) + 1;
    const tQuantity = (tMap.get(t[i]) ?? 0) + 1;
    sMap.set(s[i], sQuantity);
    tMap.set(t[i], tQuantity);
  }

  for (const [letter, sMapQuantity] of sMap.entries()) {
    const tMapQuantity = tMap.get(letter) ?? 0;
    if (tMapQuantity !== sMapQuantity) {
      return false;
    }
  }

  return true;
}
