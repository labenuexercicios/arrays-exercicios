// # Exercício 2

// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).

const arrayNumber = [3, 12, 45]
const arrayString = ["tenis", "bola", "picole"]
const arrayMix = ["boneca", 23, true]

console.log(arrayNumber.length);
console.log(arrayString.length);
console.log(arrayMix.length);

// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.

console.log(arrayNumber [0]);
console.log(arrayString [1]);
console.log(arrayMix [2]);

// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.
// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.

console.log(arrayNumber.includes(12))
console.log(arrayMix.includes("carro"))