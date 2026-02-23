function isValidSudoku(board: string[][]): boolean {
  const PLACEHOLDER = ".";
  function isValidRow(board: string[][], row: number) {
    const hash = new Set<string>();
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === PLACEHOLDER) {
        continue;
      }
      if (hash.has(board[row][i])) {
        return false;
      }
      hash.add(board[row][i]);
    }
    return true;
  }

  function isValidCol(board: string[][], col: number) {
    const hash = new Set<string>();
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === PLACEHOLDER) {
        continue;
      }
      if (hash.has(board[i][col])) {
        return false;
      }
      hash.add(board[i][col]);
    }
    return true;
  }

  function isValidSqr(board: string[][], sqr: number) {
    const hash = new Set<string>();
    const rowStart = Math.floor(sqr / 3) * 3;
    const colStart = (sqr % 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const val = board[rowStart + i][colStart + j];
        if (val === PLACEHOLDER) {
          continue;
        }
        if (hash.has(val)) {
          return false;
        }
        hash.add(val);
      }
    }
    return true;
  }

  for (let i = 0; i < 9; i++) {
    if (
      !isValidRow(board, i) ||
      !isValidCol(board, i) ||
      !isValidSqr(board, i)
    ) {
      return false;
    }
  }

  return true;
}
