const arrayN1 = ["futebool", "volei", "tenis"];
const arrayN2 = [1, 10, 17];
const arrayN3 = ["futebool", 10, false];

console.log(arrayN1);
console.log(arrayN2);
console.log(arrayN3);

let copiaA1 = arrayN1.slice()
let copiaA2 = arrayN2.slice()
let copiaA3 = arrayN3.slice()

console.log('--Add Intem--');

console.log(`Copia: ${copiaA1.push(3)}, ${copiaA1} // Original: ${copiaA1}`);//adicionando um Item no final no 1º array
console.log(`Original: ${copiaA2}`);
copiaA2.pop()
console.log(`Removido o Segundo Item do array: ${copiaA2}`);//remover o ultimo item da 2ª array

console.log(`Copia: ${copiaA3[0]}, ${copiaA3[2]} // e original: ${copiaA3}`); //removendo o 2º item do 3º array