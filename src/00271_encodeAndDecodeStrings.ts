export function encode(strs: string[]) {
  let fullString = "";
  // Add the length and a limiter to each string
  // this will help for decoding
  for (const str of strs) {
    fullString += str.length + "#" + str;
  }
  return btoa(fullString);
}

export function decode(str: string) {
  const strs: string[] = [];
  let fullString = atob(str);
  let i = 0;

  // Run until we have traversed the whole string
  while (i < fullString.length) {
    let length = 0;
    while (fullString[i] !== "#") {
      // If not a # then multiply the current length number
      // by 10 and add the current number
      // prev number 15, current number 2
      // new number 152 = (15 * 10) + 2
      length = length * 10 + parseInt(fullString[i]);
      i++;
    }
    i++; // Skip the "#"
    strs.push(fullString.substring(i, i + length));
    // Move i to next number
    i += length;
  }
  return strs;
}
