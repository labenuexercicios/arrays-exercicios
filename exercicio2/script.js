const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

const arrayNum = [12, 5, 8, 22, 13]
const arrayStrings = ["banana", "chocolate", "pão", "manteiga"]
const arrayMisturado = [10, 9, "lucas", "andre", 5 > 3, 5 === 5]

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log(arrayNum.length)
console.log(arrayStrings.length)
console.log(arrayMisturado.length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(arrayNum[0], arrayStrings[1], arrayMisturado[2])

// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. 
// Isto é, um `includes()` verdadeiro, e outro falso.

console.log(arrayNum.includes(8), arrayMisturado.includes("juliana"))
