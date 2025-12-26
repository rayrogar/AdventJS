/**
 * Reto #19: 🎄 El viaje secreto de Papá Noel
 * 
 * ¡El GPS del trineo se ha vuelto loco! 😱 Papá Noel tiene los tramos de su viaje, pero están todos desordenados.

Tu misión es reconstruir la ruta completa desde el origen hasta el destino final.

Ten en cuenta: El primer elemento del array es siempre el primer tramo del viaje. A partir de ahí, debes ir conectando los destinos con los siguientes orígenes.
*/
console.log(revealSantaRoute([
  ['MEX', 'CAN'],
  ['UK', 'GER'],
  ['CAN', 'UK']
]));
// → ['MEX', 'CAN', 'UK', 'GER']

console.log(revealSantaRoute([
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['UAE', 'JPN'],
  ['CMX', 'HKN']
]))
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

console.log(revealSantaRoute([
  ['STA', 'HYD'],
  ['ESP', 'CHN']
]));

// → ['STA', 'HYD']
 /**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  
   const dictionary = Object.fromEntries(routes) ;
   let currentCountry = routes[0][0];
   let ans = [];
   
   while(currentCountry)
   {
    ans.push(currentCountry);
    currentCountry = dictionary[currentCountry];
   }

  return ans;
}