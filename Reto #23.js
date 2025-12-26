/**
 * Reto #23: 🎁 Ruta de regalos
 * 
 * Papá Noel 🎅 tiene que repartir regalos en un pueblo representado como un mapa en cuadrícula.

Cada celda del mapa puede ser:

'S' → Punto de partida de Papá Noel
'G' → Casa que debe recibir un regalo
'.' → Camino libre
'#' → Obstáculo (no se puede pasar)
Papá Noel realiza entregas independientes para cada regalo. Sale de 'S', entrega el regalo en una casa 'G' y vuelve inmediatamente a 'S' para recoger el siguiente. Sin embargo, para este reto, solo queremos calcular la suma de las distancias mínimas de ida desde 'S' hasta cada casa 'G'.

Tu tarea

Escribe la función minStepsToDeliver(map) que devuelva el número total de pasos necesarios para llegar a todas las casas con regalos desde la posición inicial.

Ten en cuenta:

Siempre se parte de la posición inicial 'S'.
Para cada regalo, calcula la distancia mínima desde 'S' hasta esa casa 'G'.
No puedes atravesar obstáculos ('#').
Si alguna casa con regalo es inalcanzable, la función debe devolver -1.

Reglas

El mapa siempre contiene exactamente una 'S'.
Puede haber 0 o más casas con regalos ('G').
No importa el orden de las entregas, ya que cada una se mide de forma independiente desde 'S'.
Debes devolver la suma de las distancias mínimas de ida.
Pista

Calcula la distancia más corta desde 'S' hasta cada 'G' (puedes usar un algoritmo de búsqueda en anchura o BFS).
Si algún regalo no tiene camino posible, el resultado total es -1.
*/

console.log(minStepsToDeliver([
  ['S', '.', 'G'],
  ['.', '#', '.'],
  ['G', '.', '.']
]));
// Resultado: 4

/* 
Explicación:
- Distancia mínima de S (0,0) a G (0,2): 2 pasos
- Distancia mínima de S (0,0) a G (2,0): 2 pasos
- Total: 2 + 2 = 4
*/

console.log(minStepsToDeliver([
  ['S', '#', 'G'],
  ['#', '#', '.'],
  ['G', '.', '.']
]));
// Resultado: -1
// (La casa en (0,2) es inalcanzable por los obstáculos)

console.log(minStepsToDeliver([['S', 'G']]));
// Resultado: 1

/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {

    
let start= '';
let houses = [];
let ans =0;
let accSteps=0;
const listmoves=[];
const pasmoves = [];
const rows = map.length;
const cols = map[0].length;

for(let i = 0; i < map.length; i++){
    for(let j = 0; j < map[i].length; j++){
        if(map[i][j] === 'S')
            start = [i ,j];
        if(map[i][j] === 'G')
            houses.push(i + ',' +j);
    }
}


const steps = (currentPos) => {

        const y = currentPos[0];
        const x = currentPos[1];
        const nextsteps=[];


        //U
        if(y - 1 >= 0 && map[y - 1][x] !== '#' && pasmoves.indexOf((y - 1) + ',' + x) === -1){
            nextsteps.push([y - 1,x]);
            pasmoves.push((y - 1) + ',' + x); //Marcamos posición como visitada
        }
        
        //D
        if(y + 1 < rows && map[y + 1 ][x] !== '#' && pasmoves.indexOf((y + 1) + ',' + x) === -1){
            nextsteps.push([y + 1,x]);
            pasmoves.push((y + 1) + ',' + x);
        }
        
        //L
        if(x - 1 >= 0 && map[y][x - 1] !== '#' && pasmoves.indexOf(y + ',' + (x - 1)) === -1){
            nextsteps.push([y,x - 1]);
            pasmoves.push(y + ',' + (x - 1));
        }
        
        //R
        if(x + 1 < cols && map[y][x + 1] !== '#' && pasmoves.indexOf(y + ',' + (x + 1)) === -1){
            nextsteps.push([y,x + 1]);
            pasmoves.push(y + ',' + (x + 1));
        }

        return nextsteps;
    };

    pasmoves.push(start[0]+ ',' + start[1]);
    listmoves.push(...steps(start));
    const nextMoves = [];

    if( listmoves.length !==0)
        accSteps++;

    while(houses.length > 0 && listmoves.length > 0){
        
        const [y,x] = listmoves.shift();

        //Verificamos si hay puerta en dicha posicion
        const checkPos = houses.indexOf(y + ',' + x);
        if(checkPos !== -1){
            houses.splice(checkPos,1);
            ans += accSteps;
        }

        
       
        nextMoves.push(... steps([y,x])); //Buscamos posible vecinos

        if(listmoves.length === 0 && nextMoves.length !==0){

                listmoves.push(... nextMoves); //Cargamos el proximo nivel de hijos a revisar
                nextMoves.splice(0); //Eliminamos los vecinos que ya vemos a verificar
                accSteps++; //Un paso o nivel mas
            }
    }


  return houses.length > 0 ? -1 : ans;
}