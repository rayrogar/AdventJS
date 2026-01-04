/**
 * Reto #22: 🎄 El laberinto del trineo
 * 
 * Ejemplos:
 */
canEscape([
  ['S', '.', '#', '.'],
  ['#', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['#', '#', '#', 'E']
])
// → true

canEscape([
  ['S', '#', '#'],
  ['.', '#', '.'],
  ['.', '#', 'E']
])
// → false

canEscape([['S', 'E']])
// → true

canEscape([
  ['S', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', 'E']
])
// → true

canEscape([
  ['S', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#'],
  ['.', '.', 'E']
])
// → false

/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
  const rows = maze.length;
    const cols = maze[0].length;
    
    // 1. Encontrar la posición inicial 'S'
    let start = null;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === 'S') {
                start = [i, j];
                break; // Micro-optimización: dejar de buscar al encontrar S
            }
        }
        if (start) break;
    }

    if (!start) return false; // Caso defensivo (por si el mapa viene roto)

    // 2. Configurar BFS
    const queue = [start];
    
    // Usamos un Set para búsqueda O(1) de visitados
    const visited = new Set();
    visited.add(start[0] + ',' + start[1]);

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1] // Arriba, Abajo, Izq, Der
    ];

    // 3. Bucle Principal
    while (queue.length > 0) {
        const [r, c] = queue.shift(); // FIFO (Sacar el primero)

        // Explorar vecinos
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            const key = nr + ',' + nc;

            // Validamos límites
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                const cell = maze[nr][nc];

                // ¡ÉXITO! Encontramos la salida inmediatamente
                if (cell === 'E') return true;

                // Si es camino libre y no lo hemos visitado, lo encolamos
                if (cell !== '#' && !visited.has(key)) {
                    visited.add(key);      // Marcar
                    queue.push([nr, nc]);  // Encolar
                }
            }
        }
    }

    // Si la cola se vacía y nunca tocamos la 'E', es imposible salir.
    return false;
}
