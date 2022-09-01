// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const arrayNumeros = [3, 6, 9, 1, 7]
const arrayStrings = ["Giulia", "Guilherme", "Otávio", "Victória"]
const arrayMisto = [7, 9, "Giulia", "Otávio", true, false]

console.log (`Quantidade de itens em
arrayNumeros: ${arrayNumeros.length}
arrayStrings: ${arrayStrings.length}
arrayMisto: ${arrayMisto.length}
`)
console.log (`Primeiro item arrayNumeros = ${arrayNumeros[0]}
Segundo item arrayStrings = ${arrayStrings[1]}
Terceiro item arrayMisto = ${arrayMisto[2]}`)

console.log (`Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array:
ArrayNumeros inclui 7? ${arrayNumeros.includes(7)}
Imprima uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array:
ArrayMisto inclui Victória? ${arrayMisto.includes("Victória")}`)