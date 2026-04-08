export function groupAnagrams(strs: string[]): string[][] {
  const anagramMap: Map<string, number[]> = new Map<string, number[]>();
  const responseArray: string[][] = [];
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].split("").sort().join("");
    const array = anagramMap.get(str) ?? [];
    array.push(i);
    anagramMap.set(str, array);
  }

  for (const array of anagramMap.values()) {
    const anagramArray: string[] = [];
    for (const i of array) {
      anagramArray.push(strs[i]);
    }
    responseArray.push(anagramArray);
  }
  return responseArray;
}
