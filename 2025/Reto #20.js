/**
 * Reto #20: 🎁 El almacén vertical
 * 
 * En el taller de Santa, los elfos están guardando regalos 🎁 en un almacén vertical. Los regalos se dejan caer uno a uno por una columna y se van apilando.

El almacén es una matriz con # regalos y . espacios vacíos. Debes crear una función dropGifts que reciba el estado del almacén y un array con las columnas donde se dejan caer los regalos.

Reglas de la caída:

El regalo cae por la columna indicada desde arriba.
Se coloca en la celda vacía (.) más baja de esa columna.
Si la columna está llena, el regalo se ignora.
*/
console.log(dropGifts(
  [
    ['#', '#']
  ],
  [0, 0]
));

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['#', '#', '.']
  ],
  [0]
));
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#']
  ],
  [0, 2]
));
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
  ],
  [0, 1, 2]
));
/*
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#']
]
*/

console.log(dropGifts(
  [
    ['.', '#'],
    ['.', '#']
  ],
  [0, 0]
));
/*
[
  ['#', '#']
  ['#', '#']
]
 */

/*
[
  ['#', '#']
]
 */

/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {

   for (const col of drops){
        for(let i = warehouse.length - 1; i >= 0; i--){
                
                if(warehouse[i][col] === '.')
                    {
                        
                        warehouse[i][col] = '#';
                        break;
                    }
                }
       
    }

  return warehouse;
}