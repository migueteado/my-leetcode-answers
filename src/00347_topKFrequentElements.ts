function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap: Map<number, number> = new Map<number, number>();
  for (const n of nums) {
    const frequency = (frequencyMap.get(n) ?? 0) + 1;
    frequencyMap.set(n, frequency);
  }

  const frequencyArray = Array.from(frequencyMap).sort((a, b) => b[1] - a[1]);

  const resultArray: number[] = [];
  for (let i = 0; i < k; i++) {
    resultArray.push(frequencyArray[i][0]);
  }
  return resultArray;
}
