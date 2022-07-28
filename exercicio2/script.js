const arrayNumbers = [50, 21, 23, 8, 4, 7]
const arrayStrings = ["Bruna", "Paiani", "Nasser", "Spaniol"]
const arrayMisto = ["Salvador", 2022, true]


// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log("Tamanho do Array Number: ", arrayNumbers.length)
console.log("Tamanho do Array String: ", arrayStrings.length)
console.log("Tamanho do Array Misto: ", arrayMisto.length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(arrayNumbers[0]);
console.log(arrayStrings[1]);
console.log(arrayMisto[2]);

// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log("Há o número 8 no Array Numbers? ", arrayNumbers.includes(8));
console.log("Há o número 35 no Array Misto? ", arrayMisto.includes(35));