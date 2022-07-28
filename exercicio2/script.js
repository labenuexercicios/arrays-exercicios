// # Exercício 2
let arrayNumero = [1, 2, 3, 4, 5]

let arrayString = ["a", "b", "c", "d"]

let arrayMisto = [3, "c", false]
// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arrayNumero.length)
console.log(arrayString.length)
console.log(arrayMisto.length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("primeiro item:", arrayNumero[0])
console.log("segundo item:", arrayString[1])
console.log("terceiro item:", arrayMisto[2])
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log(arrayMisto.includes(3), arrayNumero.includes("9"))