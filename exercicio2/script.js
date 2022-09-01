//2 Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
const numeros = [108, 16, 7]
const strings = ["Radha", "Krsna", "Guru"]
const varias = [2000, "Campeão Mundial", true]

//2.1 Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(numeros.length) // 3
console.log(strings.length) // 3
console.log(varias.length) // 3

//2.2 Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(numeros[0]) // 108
console.log(strings[1]) // "Krisna"
console.log(varias[2]) // "108"

//2.3 Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso. ";
console.log(numeros.includes(16)) // true
console.log(strings.includes("Maya")) //false