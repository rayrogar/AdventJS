/**
 * Reto #21: 🤖 El robot de limpieza
 * 
 *Ejemplos:
 */
clearGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#']
  ],
  [1]
)
/*
1. El regalo cae en la columna 1
2. La fila 2 se convierte en [# # #].
3. La fila 2 está completa, el robot la limpia.
6. Se añade una nueva fila vacía en la posición 0.

Resultado:
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
]
*/

clearGifts(
  [
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
  ],
  [0, 1, 2]
)

/*
1. El regalo cae en la columna 0
2. El regalo cae en la columna 1
3. La fila 2 se convierte en [# # #]
4. La fila 2 está completa, el robot la limpia

Por ahora queda así:
[
  ['.', '.', '.']
  ['#', '.', '#'],
  ['#', '.', '#'],
]

5. El regalo cae en la columna 2

Resultado:
[
  ['.', '.', '#'],
  ['#', '.', '#'],
  ['#', '.', '#']
]
*/

/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
  // 1. Crear una COPIA del almacén para no romper los tests originales
  // Usamos map y spread operator para copiar fila por fila (Deep Copy de 1 nivel)
  const board = warehouse.map(row => [...row]);
  
  const rows = board.length;
  const cols = board[0].length;

  // 2. Procesar cada regalo individualmente
  for (const dropCol of drops) {
    
    // a. GRAVEDAD: Buscar desde abajo hacia arriba el primer hueco '.'
    let placedRow = -1;
    
    for (let r = rows - 1; r >= 0; r--) {
      if (board[r][dropCol] === '.') {
        board[r][dropCol] = '#'; // Colocar regalo
        placedRow = r;           // Guardar la fila donde cayó
        break;                   // Dejar de buscar en esta columna
      }
    }

    // Si la columna estaba llena, el regalo se pierde y pasamos al siguiente
    if (placedRow === -1) continue;

    // b. LIMPIEZA: Verificar si la fila donde cayó el regalo está completa
    // (Every verifica si todos los elementos de la fila son '#')
    const isRowFull = board[placedRow].every(cell => cell === '#');

    if (isRowFull) {
      // Eliminar la fila llena
      board.splice(placedRow, 1);
      
      // Añadir una nueva fila vacía arriba del todo
      // Esto empuja las filas existentes hacia abajo automáticamente
      const newRow = new Array(cols).fill('.');
      board.unshift(newRow);
    }
  }

  return board;
}
