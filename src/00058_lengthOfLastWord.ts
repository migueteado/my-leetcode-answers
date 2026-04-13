function lengthOfLastWord(s: string): number {
  // Find the position of the last character that is not an empty space
  // this will mark the end of the last word in the string
  let end = s.length - 1;
  while (end >= 0 && s[end] === " ") {
    end--;
  }

  // From the end point, keep traversing the string backwards until
  // you find an empty space or reach -1
  // that represents the start of the word
  let start = end;
  while (start >= 0 && s[start] !== " ") {
    start--;
  }

  // the length of the word is the final index minus the index before
  // the first letter of the word
  return end - start;
}
