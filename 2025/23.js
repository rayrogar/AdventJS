/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
    
  const rows = map.length;
    const cols = map[0].length;
    let start = null;
    const gifts = [];

    // 1. Configuración inicial: Encontrar S y Gs
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (map[r][c] === 'S') start = [r, c];
            if (map[r][c] === 'G') gifts.push([r, c]);
        }
    }

    if (!start) return 0; // Por si acaso no hay S
    if (gifts.length === 0) return 0; // Si no hay regalos, 0 pasos.

    // --- HELPER: Validador de movimiento (Reduce complejidad del BFS) ---
    // Verifica límites del mapa y obstáculos. 
    // No verifica 'visited' porque eso es específico de cada instancia de búsqueda.
    const isValidPos = (r, c) => {
        return r >= 0 && r < rows && 
               c >= 0 && c < cols && 
               map[r][c] !== '#';
    };

    // --- HELPER: BFS Puro ---
    const getDistance = (origin, target) => {
        const [targetR, targetC] = target;
        const queue = [[origin[0], origin[1], 0]];
        const visited = new Set();
        
        // Marcamos inicio como visitado
        visited.add(`${origin[0]},${origin[1]}`);

        const moves = [
            [-1, 0], [1, 0], [0, -1], [0, 1] // Arriba, Abajo, Izq, Der
        ];

        while (queue.length > 0) {
            const [r, c, steps] = queue.shift();

            // Condición de éxito (Early return)
            if (r === targetR && c === targetC) return steps;

            // Exploración de vecinos
            for (const [dr, dc] of moves) {
                const nr = r + dr;
                const nc = c + dc;
                const key = `${nr},${nc}`;

                // Lógica simplificada gracias a la función auxiliar
                if (isValidPos(nr, nc) && !visited.has(key)) {
                    visited.add(key);
                    queue.push([nr, nc, steps + 1]);
                }
            }
        }
        return -1; // No se encontró camino
    };

    // 2. Ejecución Principal
    let totalSteps = 0;

    for (const gift of gifts) {
        const dist = getDistance(start, gift);
        if (dist === -1) return -1; // "Fail fast" si un regalo es inalcanzable
        totalSteps += dist;
    }

    return totalSteps;
}
