/**
 * Reto #18: 🎄 Luces en línea con diagonales
 * 
 * Ejemplos
 */
hasFourInARow([
  ['R', '.', '.', '.'],
  ['.', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['.', '.', '.', 'R']
])
// true → hay 4 luces rojas en diagonal ↘

hasFourInARow([
  ['.', '.', '.', 'G'],
  ['.', '.', 'G', '.'],
  ['.', 'G', '.', '.'],
  ['G', '.', '.', '.']
])
// true → hay 4 luces verdes en diagonal ↙

hasFourInARow([
  ['R', 'R', 'R', 'R'],
  ['G', 'G', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.']
])
// true → hay 4 luces rojas en horizontal

hasFourInARow([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
])
// false → no hay 4 luces del mismo color seguidas

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
 const rows = board.length;
  if (rows === 0) return false;
  const cols = board[0].length;

  const checkLine = (r, c, dr, dc) => {
    const endR = r + 3 * dr;
    const endC = c + 3 * dc;

    if (endR < 0 || endR >= rows || endC < 0 || endC >= cols) {
      return false;
    }

    const color = board[r][c];
    return (
      color === board[r + dr][c + dc] &&
      color === board[r + 2 * dr][c + 2 * dc] &&
      color === board[r + 3 * dr][c + 3 * dc]
    );
  };

  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (board[y][x] === '.') continue;

      
      if (
        checkLine(y, x, 0, 1)  || // (→)
        checkLine(y, x, 1, 0)  || // (↓)
        checkLine(y, x, 1, 1)  || // (↘)
        checkLine(y, x, 1, -1)    // (↙)
      ) {
        return true;
      }
    }
  }

  return false;
}
