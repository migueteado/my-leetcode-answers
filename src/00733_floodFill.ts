/*
 * PROBLEM SOLVING LOG
 * Date: 2026-04-06
 *
 * Hardest step: The hardest part for me was to change the color of the cell first to avoid
 * duplicates before pushing the adyacent tiles to the queue.
 *
 * What I almost skipped: I almost skipped the early exit on the first iteration, that
 * condition avoid an endless loop in the iterative approach and a stack overflow in the
 * recursive approach when the color is the same.
 *
 * What slowing down revealed: Slowing down actually revealed the pattern to traverse through
 * the adyacent tiles. It was interesting
 */

/**
 * The iterative approach using queue can either require more memory by using an index
 * shortcut to avoid array.shift() or have a little more overhead due to the array.shift()
 * mechanism. But removes the risk of a stack overflow for large inputs
 */
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  // Store the original color for comparisons
  const originalColor = image[sr][sc];

  // Colors are the same, nothing to change
  if (color === originalColor) {
    return image;
  }

  // Create a queue so we can keep pushing valid coordinates
  // this helps with a BFS approach
  const queue: [number, number][] = [];
  // change the color
  image[sr][sc] = color;
  // push the initial coordinates
  queue.push([sr, sc]);

  // Loop while there are still valid coordinates pending
  while (queue.length > 0) {
    const [y, x] = queue.shift();
    const adyacentCoordinates = [
      [y - 1, x],
      [y + 1, x],
      [y, x - 1],
      [y, x + 1],
    ];
    // Add the valid adyacent coordinates to the queue
    for (const [ny, nx] of adyacentCoordinates) {
      if (image[ny] != null && image[ny][nx] === originalColor) {
        image[ny][nx] = color;
        queue.push([ny, nx]);
      }
    }
  }

  return image;
}

/**
 * On the other hand the recursive approach is easier to read but can perform poorly
 * with larger datasets. This is common for recursive approaches.
 */
function floodFill2(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const old = image[sr][sc];
  if (color === old) return image;
  const m = image.length - 1;
  const n = image[0].length - 1;

  function dfs(y: number, x: number) {
    if (y < 0 || y > m || x < 0 || x > n || image[y][x] !== old) return;
    image[y][x] = color;
    dfs(y - 1, x);
    dfs(y + 1, x);
    dfs(y, x - 1);
    dfs(y, x + 1);
  }

  dfs(sr, sc);

  return image;
}
