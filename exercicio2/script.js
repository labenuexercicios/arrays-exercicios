const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.


let arrayNumber = [1, 5, 4, 8, 2];
let arrayString = ["Joao", "Carlos", "Antonio", "Vitor"];
let arrayStringNumberBool = ["Joao", 3, true];

console.log(`Tamanho de arrayNumber ${arrayNumber.length} `)
console.log(`Tamanho de arrayString ${arrayString.length} `)
console.log(`Tamanho de arrayStringNumberBool ${arrayStringNumberBool.length} `)
console.log(`Primeiro item do primeiro array ${arrayNumber[0]}`)
console.log(`Segundo item do Segundo array ${arrayString[1]}`)
console.log(`Terceiro item do Terceiro array ${arrayStringNumberBool[3]}`)


console.log(`O primeiro array tem 4? ${arrayNumber.includes(4)}`)
console.log(`O Terceiro  array tem José? ${arrayStringNumberBool.includes("José")}`)