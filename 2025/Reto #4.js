/**** DESCIFRA EL PIN DE SANTA ****
Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

[1++][2-][3+][<]
Escribe una función que descifre el PIN a partir del código.

El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

Las operaciones se aplican en orden al número y son:

+ suma 1
- resta 1
El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

También existe el bloque especial [<], que repite el dígito del bloque anterior.

Si al final hay menos de 4 dígitos, se debe devolver null.
*/

/* TESTs */
console.log(decodeSantaPin('[1++][2-][3+][<]'));
// "3144"

console.log(decodeSantaPin('[9+][0-][4][<]'));
// "0944"

console.log(decodeSantaPin('[1+][2-]'));
// null (solo 2 dígitos)

console.log(decodeSantaPin('[<][0-][4][<]'));
// "null" (primero es repetir pero no hay anterior)



/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {

   let groups=code.match(/[^[\]]+/g)||[];
   const ans = groups.reduce((carry,block)=>{
    if(block === '<')
        return carry + (carry.slice(-1) || '');

    const digit = ((parseInt(block)+(block.split('+').length-1)-(block.split('-').length-1)) % 10 + 10) % 10;
    return carry + digit;
},'');

   /*
    groups.forEach((value,key)=>{
      if(value[0]==='<'){
        if(ans.length > 0)
        ans += key > 0 ? ans[ans.length-1] : '';}
    else{
        let carry=parseInt(value[0]);
    for(let i=1;i<value.length;i++){
        if(value[i] === '+')
            carry = (carry + 1) % 10;
        else
            carry = (carry - 1 + 10) % 10;
    }
    ans += carry;
}
})*/
   return ans.length===4?ans:null;
}
