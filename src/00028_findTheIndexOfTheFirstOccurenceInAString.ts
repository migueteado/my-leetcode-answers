export function strStr(haystack: string, needle: string): number {
  let left = 0;
  while (left <= haystack.length - needle.length) {
    let right = left;
    if (haystack[left] === needle[0]) {
      while (
        right - left < needle.length &&
        haystack[right] === needle[right - left]
      ) {
        if (right - left === needle.length - 1) {
          return left;
        }
        right++;
      }
    }
    left++;
  }

  return -1;
}
