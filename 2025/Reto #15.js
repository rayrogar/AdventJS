/**
 * Reto #15: ✏️ Dibujando tablas
 * 
 * Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe tener:

Cabecera con letras de columna (A, B, C…).
El contenido de la tabla son los valores de los objetos.
Los valores deben estar alineados a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
La función recibe un segundo parámetro sortBy que indica el nombre del campo por el que se deben ordenar las filas. El orden será alfabético ascendente si los valores son strings y numérico ascendente si son números.

Mira el ejemplo para ver cómo debes dibujar la tabla:

 */

console.log(drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
));
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

console.log(drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
));
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+

/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {

  if(data.length!==0){

    
    if(typeof data[0][sortBy] === 'number')
        data.sort((a,b)=> a[sortBy]-b[sortBy]);
      else
        data.sort((a,b)=>a[sortBy].localeCompare(b[sortBy]));

    const cols = Object.keys(data[0]);


    console.log(data); //Debug
    let table = '';
    let tableWidth = 0;

    
    return table;
  }
  return ''
}