// EXERCÍCIO 02

const numeros = [4,9,31,6,29];
const string = ["vermelho", "azul", "verde", "branco"];
const misto = ["morango", 44, "maracujá", false];

console.log("PARTE 1 - Quantidade de itens")
console.log(numeros.length);
console.log(string.length);
console.log(misto.length);

console.log("PARTE 2 - Alguns dos itens")
console.log(`${numeros[0]} \n${string[1]} \n${misto[2]}`);

console.log("PARTE 3 - Booleano")
console.log(numeros.includes(9));
console.log(misto.includes("44"));
