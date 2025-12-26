/* MONTANDO EL ARBOL
*Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

*height → la altura del árbol (número de filas).
*ornament → el carácter del adorno (por ejemplo, "o" o "@").
*frequency → cada cuántas posiciones de asterisco aparece el adorno.
*El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.
*
*El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.
*
*El árbol debe estar centrado y tener un tronco # de una línea al final.

🧩 Ejemplos
*/
drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #

/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  
    let ans='';
    const cadLength = height*height;
   
    for(let i = 0; i < cadLength; i++){
        if((i + 1 )% frequency === 0)
            ans+=ornament;
        else
            ans+='*';
    }

    let tree='';
    let pointer = 0;

    for(let level = 1; level <= height; level++){

        const portion = 2 * level - 1;
        tree += ' '.repeat(height-level);
        tree += ans.slice(pointer,pointer+portion)+'\n';
        pointer+=portion;
    }
    
    tree+=' '.repeat(height - 1) + '#';

   
    /**DEBUG */
    console.log('ans: '+ ans);
    console.log(tree);
    /**DEBUG */
  return tree;
}