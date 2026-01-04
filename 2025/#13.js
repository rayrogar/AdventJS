/**
 * Reto #13: 🏭 La cadena de montaje

Ejemplos
 */
runFactory([
  '>>.'
]) // 'completed'

runFactory([
  '>>>'
]) // 'broken'

runFactory([
  '>><'
]) // 'loop'

runFactory([
  '>>v',
  '..<'
]) // 'completed'

runFactory([
  '>>v',
  '<<<'
]) // 'broken'

runFactory([
  '>v.',
  '^..'
]) // 'completed'

/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
 let x = 0; 
  let y = 0; 
  const visited = new Set();
  
  const height = factory.length;
  
  const width = height > 0 ? factory[0].length : 0;

  while (true) {
    
    if (y < 0 || y >= height || x < 0 || x >= width) {
      return 'broken';
    }

    
    const key = `${x},${y}`;
    if (visited.has(key)) {
      return 'loop';
    }
    visited.add(key);

    
    const current = factory[y][x];

    
    if (current === '.') {
      return 'completed';
    }

    
    if (current === '>') x++;
    else if (current === '<') x--;
    else if (current === 'v') y++;
    else if (current === '^') y--;
  }
}