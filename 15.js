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
 * @param {Array<Object>} data
 * @param {string} sortBy
 * @returns {string}
 */
function drawTable(data, sortBy) {
  // 1. Validación inicial
  if (data.length === 0) return '';

  // 2. Copiamos el array para no mutar el original y ordenamos
  // Usamos spread operator [...] para crear una copia superficial
  const sortedData = [...data];
  
  if (typeof sortedData[0][sortBy] === 'number') {
    sortedData.sort((a, b) => a[sortBy] - b[sortBy]);
  } else {
    sortedData.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

  // 3. Obtenemos las columnas (keys) del primer objeto
  const columns = Object.keys(sortedData[0]);

  // 4. Calculamos el ancho máximo de cada columna
  const colWidths = columns.map((key, index) => {
    // El ancho mínimo es 1 (por la letra de la cabecera A, B...)
    // O la longitud del string más largo en esa columna
    const maxDataLength = Math.max(
        ...sortedData.map(row => String(row[key]).length)
    );
    // El ancho es el máximo entre el contenido y el título de la columna (que es longitud 1)
    return Math.max(maxDataLength, 1); 
  });

  // --- Funciones Helpers para dibujar ---

  // Crea la línea separadora: +------+-------+
  const drawSeparator = () => {
    const segments = colWidths.map(width => '-'.repeat(width + 2)); // +2 por los espacios laterales
    return '+' + segments.join('+') + '+\n';
  };

  // Crea una fila de contenido: | Dato | Dato |
  const drawRow = (values) => {
    const segments = values.map((val, i) => {
        const strVal = String(val);
        // Espacio + Valor + Relleno de espacios a la derecha
        return ' ' + strVal.padEnd(colWidths[i]) + ' ';
    });
    return '|' + segments.join('|') + '|\n';
  };

  // 5. Construcción de la tabla
  let table = '';

  // A) Línea superior
  table += drawSeparator();

  // B) Cabecera (A, B, C...)
  const headers = columns.map((_, i) => String.fromCharCode(65 + i));
  table += drawRow(headers);

  // C) Separador después de cabecera
  table += drawSeparator();

  // D) Filas de datos
  sortedData.forEach(obj => {
    const values = columns.map(key => obj[key]);
    table += drawRow(values);
  });

  // E) Línea final
  table += drawSeparator();

  // Quitamos el último salto de línea (\n) para que sea exacto al test
  return table.slice(0, -1);
}