/**
 * Reto #24: 🪞 Verifica si los árboles son espejos mágicos
 * En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía 🌲🌲 para 
 * mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los 
 * árboles deben estar en perfecta sincronía como espejos 🪞.
 * 
 * Dos árboles binarios son espejos si:
 * 
 * Las raíces de ambos árboles tienen el mismo valor.
 * Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo 
 * árbol.
 * Y el árbol se representa con tres propiedades value, left y right. Dentro de estas dos últimas va 
 * mostrando el resto de ramas (si es que tiene):

const tree = {
  value: '⭐️',
  left: {
    value: '🎅'
    // left: {...}
    // right: { ... }
  },
  right: {
    value: '🎁'
    // left: { ... }
    // right: { ...&nbsp;}
  }
}
* Santa necesita tu ayuda para verificar si los árboles están sincronizados para que la estrella pueda 
* seguir brillando. Debes devolver un array donde la primera posición indica si los árboles están sincronizados 
* y la segunda posición devuelve el valor de la raíz del primer árbol.
*
* Ejemplos: 
*/
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' }
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
) // [false, '🎅']

/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  // Función auxiliar recursiva para validar la simetría (espejo)
  const areMirrors = (nodeA, nodeB) => {
    // 1. Caso Base Exitoso: Ambos nodos son nulos (fin de la rama en ambos lados)
    if (!nodeA && !nodeB) return true;

    // 2. Caso Base Fallido: Uno existe y el otro no (estructura asimétrica)
    if (!nodeA || !nodeB) return false;

    // 3. Validación de Valor: Los valores actuales deben ser idénticos
    if (nodeA.value !== nodeB.value) return false;

    // 4. Recursividad Cruzada:
    // Para ser espejo, la Izquierda de A debe coincidir con la Derecha de B
    // Y la Derecha de A debe coincidir con la Izquierda de B
    return areMirrors(nodeA.left, nodeB.right) && 
           areMirrors(nodeA.right, nodeB.left);
  }

  // Ejecutamos la comprobación
  const isSynchronized = areMirrors(tree1, tree2);

  // Devolvemos el array solicitado.
  // Usamos ?. (Optional Chaining) por seguridad, por si tree1 llega nulo.
  return [isSynchronized, tree1?.value];
}
  