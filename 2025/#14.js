/**
 * Reto #14: 🗃️ Encuentra el camino al regalo
 * 
 * Ejemplos
 */
const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

findGiftPath(workshop, 'train')
// ➜ ['storage', 'shelf', 'box1']

findGiftPath(workshop, 'switch')
// ➜ ['storage', 'shelf', 'box2']

findGiftPath(workshop, 'car')
// ➜ ['storage', 'box']

findGiftPath(workshop, 'doll')
// ➜ ['gift']

findGiftPath(workshop, 'plane')
// ➜ []

/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  for (const key in workshop) {
    // 1. ¿Lo encontramos directamente?
    if (workshop[key] === gift) {
      return [key];
    }

    // 2. Si es un objeto, profundizamos (Recursividad)
    if (typeof workshop[key] === 'object' && workshop[key] !== null) {
      const subPath = findGiftPath(workshop[key], gift);
      
      // Si la llamada recursiva devuelve un array con contenido, lo encontramos ahí
      if (subPath.length > 0) {
        return [key, ...subPath];
      }
    }
  }

  // 3. Si terminamos el bucle y no está, devolvemos array vacío
  return [];
}
