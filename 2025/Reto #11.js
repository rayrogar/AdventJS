
/**
 * Reto #11: 📹 Regalos sin vigilancia
 * 
 * El grinch quiere robar los regalos de Navidad del almacén. Para ello necesita saber qué regalos no tienen vigilancia.

El almacén se representa como un array de strings (string[]), donde cada regalo (*) está protegido si su posición está junto a una cámara (#). 
Cada espacio vacío se representa con un punto (.).

Tu tarea es contar cuántos regalos están sin vigilancia, es decir, que no tienen ninguna cámara adyacente (arriba, abajo, izquierda o derecha).

Ten en cuenta: solo se considera como "adyacente" las 4 direcciones cardinales, no en diagonal.

Los regalos en las esquinas o bordes pueden estar sin vigilancia, siempre que no tengan cámaras directamente al lado.

Ejemplos:
 */

console.log(findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
])) // ➞ 0

// Todos los regalos están junto a una cámara

console.log(findUnsafeGifts([
  '...',
  '.*.',
  '...'
])) // ➞ 1

// Este regalo no tiene cámaras alrededor

console.log(findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
])) // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

console.log(findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
])) // ➞ 4

// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara

console.log(findUnsafeGifts([
  '*.*',
  '*.#',
  '*.*'
])) // ➞ 3
// Los dos de las esquinas derechas comparten camara

/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  let unsafe = 0;
    
  for(let i = 0; i< warehouse.length;i++)
  {
    for(let j = 0; j < warehouse[i].length; j++)
    {
      if(warehouse[i][j]==='*'){
        const cameraDetected = 
                    warehouse[i - 1]?.[j] === '#' ||
                    warehouse[i + 1]?.[j] === '#' ||      
                    warehouse[i]?.[j - 1] === '#' ||
                    warehouse[i]?.[j + 1] === '#';

        if(!cameraDetected) unsafe++;
      }
    }
  }
  return unsafe;
}
