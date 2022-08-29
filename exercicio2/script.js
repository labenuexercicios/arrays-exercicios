// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

const arrayNumeros = [2, 4, 8, 10]
console.log(arrayNumeros.length)
console.log(arrayNumeros[0])
console.log(arrayNumeros.includes(2))

const arrayGames = ["Uncharted", "FallGuys", "Sekiro"];
console.log(arrayGames.length)
console.log(arrayGames[1])

const arrayMisto = ["AmongUs", "DevilMayCry", 15, 20, true, false];
console.log(arrayMisto.length)
console.log(arrayMisto[2])
console.log(arrayMisto.includes("Valorant"))




