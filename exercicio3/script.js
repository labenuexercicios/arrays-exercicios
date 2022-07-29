// EXERCÌCIO 03

const numeros = [4,9,31,6,29];
const string = ["vermelho", "azul", "verde", "branco"];
const misto = ["morango", 44, "maracujá", false];

const numerosCopia = numeros.slice();
const stringCopia = string.slice();
const mistoCopia = misto.slice();

console.log("PARTE 1 - Adicionar um número (ao início)")
console.log(numeros);
numerosCopia.unshift(24)
console.log(numerosCopia);

console.log("PARTE 2 - Excluir o último item")
console.log(string);
stringCopia.pop()
console.log(stringCopia);

console.log("PARTE 3 - Excluir o segundo item")
console.log(misto)
mistoCopia.splice(1,1)
console.log(mistoCopia);
