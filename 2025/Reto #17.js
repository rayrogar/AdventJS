/** Reto #17: 🎄 El panel de luces navideñas
 * 
 * En el Polo Norte han montado un panel de luces navideñas 🎄✨ para decorar el taller. Cada luz puede estar encendida con un color o apagada.

El panel se representa como una matriz donde cada celda puede ser:

'.' → luz apagada
'R' → luz roja
'G' → luz verde
Los elfos quieren saber si en el panel existe una línea de 4 luces del mismo color encendidas y alineadas (solo horizontal ↔ o vertical ↕). Las luces apagadas ('.') no cuentan.
 */

console.log(hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
]));
// true → hay 4 luces rojas en horizontal

console.log(hasFourLights([
  ['G', '.', '.'],
  ['G', '.', '.'],
  ['G', '.', '.'],
  ['G', '.', '.']
]));
console.log(hasFourLights([
  ['.', '.','R', 'R'],
  ['R', 'R', '.','.'],
  ['.', '.', '.','.'],
  ['.', '.', '.','.']
]));

console.log(hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
]));
// true → hay 4 luces verdes en vertical

console.log(hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
]));
// false → no hay 4 luces del mismo color seguidas

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  let redRow = 0;
  let greenRow = 0 ;
  
  const rowLength = board[0].length;
  const cheinrowLight = board.flat().join('');

  //4 luces en Fila
  for(let i = 0; i < cheinrowLight.length; i++){
    if(i % rowLength === 0)
    {
        redRow=0;
        greenRow=0;
    }
  
    redRow = cheinrowLight[i] === 'R' ? redRow + 1 : 0;
    greenRow = cheinrowLight[i] === 'G' ? greenRow + 1 : 0;
    if(redRow === 4 || greenRow === 4)
        return true;

   
    
    
  }

  //4 luces en columna
  for(let i = 0; i < board[0].length;i++){
    
    let redcol = 0;
    let greencol = 0;

   for(let j =0 ; j < board.length; j++){
        
        redcol = board[j][i] === 'R' ? redcol + 1 : 0;
        greencol = board[j][i] === 'G' ? greencol + 1 : 0;
        
     if(redcol === 4 || greencol === 4)
         return true;
    }

  }
/** OPTIMIZACION
 * 
 * const rows = board.length;
  if (rows === 0) return false;
  const cols = board[0].length;

  // Recorremos cada celda una sola vez
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const color = board[y][x];

      // Optimización micro: Si la luz está apagada, pasamos a la siguiente
      if (color === '.') continue;

      // 1. COMPROBACIÓN HORIZONTAL (Lookahead)
      // Solo verificamos si quedan al menos 3 espacios a la derecha (x + 3 < cols)
      if (x + 3 < cols) {
        if (color === board[y][x + 1] &&
            color === board[y][x + 2] &&
            color === board[y][x + 3]) {
          return true;
        }
      }

      // 2. COMPROBACIÓN VERTICAL (Lookahead)
      // Solo verificamos si quedan al menos 3 espacios abajo (y + 3 < rows)
      if (y + 3 < rows) {
        if (color === board[y + 1][x] &&
            color === board[y + 2][x] &&
            color === board[y + 3][x]) {
          return true;
        }
      }
    }
  }
 * 
 */

  return false
}