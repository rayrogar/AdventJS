/** Reto #9: 🦌 El reno robot aspirador
Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.

El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).

Recibirás dos parámetros:

board: un string que representa el tablero.
moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).
Reglas del movimiento:

Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
Si el reno no recoge nada ni se estrella → devuelve 'fail'.
Ten en cuenta que si el reno recoge algo del suelo, ya es 'success', indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.

Ejemplo:
 */
const board = `
.....
.*#.*
.@...
.....
`

console.log(moveReno(board, 'D'));
// ➞ 'fail' -> se mueve pero no recoge nada

console.log(moveReno(board, 'U'));
// ➞ 'success' -> recoge algo (*) justo encima

console.log(moveReno(board, 'RU'));
// ➞ 'crash' -> choca contra un obstáculo (#)

console.log(moveReno(board, 'RRRUU'));
// ➞ 'success' -> recoge algo (*)

console.log(moveReno(board, 'DD'));
// ➞ 'crash' -> se choca con la parte de abajo del tablero

console.log(moveReno(board, 'UUU'));
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

console.log(moveReno(board, 'RR'));
// ➞ 'fail' -> se mueve pero no recoge nada

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const boardSquare = board.trim();
  const firstNewLine = boardSquare.indexOf('\n');
  const width = firstNewLine === -1 ? boardSquare.length : firstNewLine + 1;

  let robot=boardSquare.indexOf('@');

  const movements ={
        'U': -width,
        'D': width,
        'L': -1,
        'R': 1
    };

  for(const command of moves){
        
        const nextPos = robot + movements[command];
        const value = boardSquare[nextPos]; 

        if (!value) return 'crash';

        if( value === '*') return 'success';
        
        if(value === '#' || value ==='\n') return 'crash';
        robot = nextPos;
    }
  
  return 'fail';
}